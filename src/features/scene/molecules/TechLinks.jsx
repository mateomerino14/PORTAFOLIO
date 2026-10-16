import useTechLinks from '../hooks/useTechLinks';
import {COLORS} from '../../../constants';
import {TECH_STYLE} from '../constants/sceneConfig';

function TechLinks({positions, techPositions}) {
  const {techNodes, registerLink, registerNode} = useTechLinks(positions, techPositions);
  return (
    <group>
      {techNodes.map((node, index) => (
        <group key={node.tech}>
          <lineSegments ref={registerLink(index)} geometry={node.geometry}>
            <lineBasicMaterial color={COLORS.accent} transparent opacity={TECH_STYLE.idleOpacity} depthWrite={false} />
          </lineSegments>
          <mesh ref={registerNode(index)} position={node.position}>
            <sphereGeometry args={[TECH_STYLE.radius, TECH_STYLE.segments, TECH_STYLE.segments]} />
            <meshBasicMaterial color={COLORS.fog} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default TechLinks;
