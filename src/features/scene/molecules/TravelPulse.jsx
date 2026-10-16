import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {journeyStore} from '../../journey/store/journeyStore';
import {COLORS} from '../../../constants';
import {CAMERA_MOTION, PULSE_STYLE} from '../constants/sceneConfig';
import {splitProgress} from '../../../utils/journey';

const hiddenScale = 0;

function TravelPulse({positions}) {
  const pulseRef = useRef(null);
  const lastIndex = positions.length - 1;

  useFrame(() => {
    const pulse = pulseRef.current;
    if (!pulse) {
      return;
    }
    const {from, to, travel} = splitProgress(journeyStore.getProgress(), lastIndex, CAMERA_MOTION.dwell);
    const isTravelling = from !== to && travel > PULSE_STYLE.visibleFrom && travel < PULSE_STYLE.visibleTo;
    if (!isTravelling) {
      pulse.scale.setScalar(hiddenScale);
      return;
    }
    pulse.position.lerpVectors(positions[from], positions[to], travel);
    pulse.scale.setScalar(1 + Math.sin(travel * Math.PI) * (PULSE_STYLE.maxScale - 1));
  });

  return (
    <mesh ref={pulseRef} scale={hiddenScale}>
      <sphereGeometry args={[PULSE_STYLE.radius, PULSE_STYLE.segments, PULSE_STYLE.segments]} />
      <meshBasicMaterial color={COLORS.signal} toneMapped={false} />
    </mesh>
  );
}

export default TravelPulse;
