import {useActiveStopIndex} from '../../journey/hooks/useJourneyState';
import useNodeFade from '../hooks/useNodeFade';
import {STOP_LEVELS} from '../../../utils/journey';
import {NODE_COLORS, NODE_SIZES} from '../constants/sceneConfig';

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
          </group>
        );
      })}
    </group>
  );
}

export default JourneyNodes;
