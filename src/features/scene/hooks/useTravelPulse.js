import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {journeyStore} from '../../journey/store/journeyStore';
import {CAMERA_MOTION, PULSE_STYLE} from '../constants/sceneConfig';
import {splitProgress} from '../../../utils/journey';

export const HIDDEN_SCALE = 0;

const restScale = 1;

function useTravelPulse(positions, isReducedMotion) {
  const pulseRef = useRef(null);
  const lastIndex = positions.length - 1;

  useFrame(() => {
    const pulse = pulseRef.current;
    if (!pulse) {
      return;
    }
    if (isReducedMotion) {
      pulse.scale.setScalar(HIDDEN_SCALE);
      return;
    }
    const {from, to, travel} = splitProgress(journeyStore.getProgress(), lastIndex, CAMERA_MOTION.dwell);
    const isTravelling = from !== to && travel > PULSE_STYLE.visibleFrom && travel < PULSE_STYLE.visibleTo;
    if (!isTravelling) {
      pulse.scale.setScalar(HIDDEN_SCALE);
      return;
    }
    pulse.position.lerpVectors(positions[from], positions[to], travel);
    pulse.scale.setScalar(restScale + Math.sin(travel * Math.PI) * (PULSE_STYLE.maxScale - restScale));
  });

  return pulseRef;
}

export default useTravelPulse;
