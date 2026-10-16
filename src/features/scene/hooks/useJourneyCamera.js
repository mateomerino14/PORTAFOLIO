import {useMemo} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {Vector3} from 'three';
import {journeyStore} from '../../journey/store/journeyStore';
import {CAMERA_MOTION, CAMERA_VIEWS, COMPACT_MAX_WIDTH_PX} from '../constants/sceneConfig';
import {splitProgress} from '../../../utils/journey';

const heroStopIndex = 0;
const instantSmoothing = 1;
const snapThreshold = 0.5;

const toVectors = (view) => ({offset: new Vector3(...view.offset), lookShift: new Vector3(...view.lookShift)});

const snapTravel = (travel) => {
  if (travel < snapThreshold) {
    return 0;
  }
  return 1;
};

function useJourneyCamera(positions, isReducedMotion) {
  const {camera, pointer, size} = useThree();
  const lastIndex = positions.length - 1;
  const isCompact = size.width < COMPACT_MAX_WIDTH_PX;

  const rig = useMemo(() => {
    let viewSet = CAMERA_VIEWS.wide;
    if (isCompact) {
      viewSet = CAMERA_VIEWS.compact;
    }
    const overview = toVectors(viewSet.overview);
    const stop = toVectors(viewSet.stop);
    const views = positions.map((_, index) => {
      if (index === heroStopIndex) {
        return overview;
      }
      return stop;
    });
    return {views, target: new Vector3(), offset: new Vector3(), lookShift: new Vector3(), desired: new Vector3(), look: new Vector3(), currentLook: new Vector3().copy(positions[heroStopIndex]).add(overview.lookShift)};
  }, [positions, isCompact]);

  useFrame((_, delta) => {
    const split = splitProgress(journeyStore.getProgress(), lastIndex, CAMERA_MOTION.dwell);
    let travel = split.travel;
    let smoothing = 1 - Math.exp(-delta * CAMERA_MOTION.followRate);
    let parallax = CAMERA_MOTION.pointerParallax;
    if (isReducedMotion) {
      travel = snapTravel(travel);
      smoothing = instantSmoothing;
      parallax = 0;
    }
    const {views, target, offset, lookShift, desired, look, currentLook} = rig;
    target.lerpVectors(positions[split.from], positions[split.to], travel);
    offset.lerpVectors(views[split.from].offset, views[split.to].offset, travel);
    lookShift.lerpVectors(views[split.from].lookShift, views[split.to].lookShift, travel);
    desired.copy(target).add(offset);
    desired.set(desired.x + pointer.x * parallax, desired.y + pointer.y * parallax, desired.z);
    look.copy(target).add(lookShift);
    camera.position.lerp(desired, smoothing);
    currentLook.lerp(look, smoothing);
    camera.lookAt(currentLook);
  });
}

export default useJourneyCamera;
