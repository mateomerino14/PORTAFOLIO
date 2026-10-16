import {Html} from '@react-three/drei';
import {useActiveStopIndex} from '../../journey/hooks/useJourneyState';
import useNodeFade from '../hooks/useNodeFade';
import {STOP_LEVELS} from '../../../utils/journey';
import {LABEL_OFFSET_Y, LABEL_RANGE, NODE_COLORS, NODE_SIZES} from '../constants/sceneConfig';

const styles = {
  label: 'pointer-events-none whitespace-nowrap font-mono text-[11px] text-fog transition-opacity duration-500',
  activeLabel: 'pointer-events-none whitespace-nowrap font-mono text-[11px] text-paper transition-opacity duration-500',
  hidden: 'opacity-0',
  shown: 'opacity-100',
};

const labelClass = (isActive, isVisible) => {
  let base = styles.label;
  if (isActive) {
    base = styles.activeLabel;
  }
  if (isVisible) {
    return `${base} ${styles.shown}`;
  }
  return `${base} ${styles.hidden}`;
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

const nodeRadius = (stop) => {
  if (stop.level === STOP_LEVELS.main) {
    return NODE_SIZES.main;
  }
  return NODE_SIZES.branch;
};

const isLabelVisible = (stop, index, activeIndex) => {
  if (activeIndex === heroStopIndex) {
    return stop.level === STOP_LEVELS.main;
  }
  return Math.abs(index - activeIndex) <= LABEL_RANGE;
};

function JourneyNodes({layout}) {
  const activeIndex = useActiveStopIndex();
  const {stops, positions} = layout;
  const registerNode = useNodeFade(positions);

  return (
    <group>
      {stops.map((stop, index) => {
        if (index === heroStopIndex) {
          return null;
        }
        const isActive = index === activeIndex;
        const radius = nodeRadius(stop);
        const color = nodeColor(stop, index, activeIndex);
        return (
          <group key={stop.id} ref={registerNode(index)} position={positions[index]}>
            <mesh scale={isActive ? NODE_SIZES.activeScale : 1}>
              <sphereGeometry args={[radius, NODE_SIZES.segments, NODE_SIZES.segments]} />
              <meshBasicMaterial color={color} toneMapped={false} />
            </mesh>
            {isActive && (
              <mesh scale={NODE_SIZES.haloScale}>
                <sphereGeometry args={[radius, NODE_SIZES.segments, NODE_SIZES.segments]} />
                <meshBasicMaterial color={color} transparent opacity={NODE_SIZES.haloOpacity} depthWrite={false} toneMapped={false} />
              </mesh>
            )}
            <Html position={[0, LABEL_OFFSET_Y, 0]} center zIndexRange={[0, 0]}>
              <span className={labelClass(isActive, isLabelVisible(stop, index, activeIndex))}>{stop.label}</span>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default JourneyNodes;
