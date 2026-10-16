import {Html} from '@react-three/drei';
import {useActiveStopIndex} from '../../journey/hooks/useJourneyState';
import {STOP_LEVELS} from '../../../utils/journey';
import {LABEL_OFFSET_Y, NODE_COLORS, NODE_SIZES} from '../constants/sceneConfig';

const styles = {
  label: 'pointer-events-none whitespace-nowrap font-mono text-[11px] text-fog transition-colors',
  activeLabel: 'pointer-events-none whitespace-nowrap font-mono text-[11px] text-paper transition-colors',
};

const heroStopIndex = 0;

const nodeColor = (stop, index, activeIndex) => {
  if (index < activeIndex) {
    return NODE_COLORS.visited;
  }
  if (stop.level === STOP_LEVELS.main) {
    return NODE_COLORS.main;
  }
  return NODE_COLORS.branch;
};

const isLabelVisible = (stop, activeStop) => {
  if (stop.level === STOP_LEVELS.main) {
    return true;
  }
  return stop.groupId === activeStop.groupId;
};

function JourneyNodes({layout}) {
  const activeIndex = useActiveStopIndex();
  const {stops, positions} = layout;
  const activeStop = stops[activeIndex];

  return (
    <group>
      {stops.map((stop, index) => {
        if (index === heroStopIndex) {
          return null;
        }
        const isActive = index === activeIndex;
        let radius = NODE_SIZES.branch;
        if (stop.level === STOP_LEVELS.main) {
          radius = NODE_SIZES.main;
        }
        let scale = 1;
        if (isActive) {
          scale = NODE_SIZES.activeScale;
        }
        return (
          <group key={stop.id} position={positions[index]}>
            <mesh scale={scale}>
              <sphereGeometry args={[radius, NODE_SIZES.segments, NODE_SIZES.segments]} />
              <meshBasicMaterial color={nodeColor(stop, index, activeIndex)} toneMapped={false} />
            </mesh>
            {isLabelVisible(stop, activeStop) && (
              <Html position={[0, LABEL_OFFSET_Y, 0]} center zIndexRange={[0, 0]}>
                <span className={isActive ? styles.activeLabel : styles.label}>{stop.label}</span>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
}

export default JourneyNodes;
