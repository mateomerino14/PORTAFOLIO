import useTravelPulse, {HIDDEN_SCALE} from '../hooks/useTravelPulse';
import {COLORS} from '../../../constants';
import {PULSE_STYLE} from '../constants/sceneConfig';

function TravelPulse({positions, isReducedMotion}) {
  const pulseRef = useTravelPulse(positions, isReducedMotion);
  return (
    <mesh ref={pulseRef} scale={HIDDEN_SCALE}>
      <sphereGeometry args={[PULSE_STYLE.radius, PULSE_STYLE.segments, PULSE_STYLE.segments]} />
      <meshBasicMaterial color={COLORS.signal} toneMapped={false} />
    </mesh>
  );
}

export default TravelPulse;
