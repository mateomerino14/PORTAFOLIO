import {useMemo} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {Vector3} from 'three';
import {journeyStore} from '../../journey/store/journeyStore';
import {CAMERA_MOTION, CAMERA_VIEWS} from '../constants/sceneConfig';
import {splitProgress} from '../../../utils/journey';

const heroStopIndex = 0;

const toVectors = (view) => ({offset: new Vector3(...view.offset), lookShift: new Vector3(...view.lookShift)});

function useJourneyCamera(positions) {
  const {camera, pointer} = useThree();
  const lastIndex = positions.length - 1;

  const rig = useMemo(() => {
    const overview = toVectors(CAMERA_VIEWS.overview);
    const stop = toVectors(CAMERA_VIEWS.stop);
    const views = positions.map((_, index) => {
      if (index === heroStopIndex) {
        return overview;
      }
      return stop;
    });
    return {views, target: new Vector3(), offset: new Vector3(), lookShift: new Vector3(), desired: new Vector3(), look: new Vector3(), currentLook: new Vector3().copy(positions[heroStopIndex]).add(overview.lookShift)};
  }, [positions]);

  useFrame((_, delta) => {
    const {from, to, travel} = splitProgress(journeyStore.getProgress(), lastIndex, CAMERA_MOTION.dwell);
    const {views, target, offset, lookShift, desired, look, currentLook} = rig;
    target.lerpVectors(positions[from], positions[to], travel);
    offset.lerpVectors(views[from].offset, views[to].offset, travel);
    lookShift.lerpVectors(views[from].lookShift, views[to].lookShift, travel);
    desired.copy(target).add(offset);
    desired.set(desired.x + pointer.x * CAMERA_MOTION.pointerParallax, desired.y + pointer.y * CAMERA_MOTION.pointerParallax, desired.z);
    look.copy(target).add(lookShift);
    const smoothing = 1 - Math.exp(-delta * CAMERA_MOTION.followRate);
    camera.position.lerp(desired, smoothing);
    currentLook.lerp(look, smoothing);
    camera.lookAt(currentLook);
  });
}

export default useJourneyCamera;
