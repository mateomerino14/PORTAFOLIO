import useGraphNetwork from '../hooks/useGraphNetwork';
import {GRAPH_CONFIG} from '../constants/sceneConfig';
import {COLORS} from '../../../constants';

const sphereSegments = 16;
const pulseSegments = 10;

function GraphNetwork() {
  const {groupRef, pulsesRef, edgeGeometry, nodeStyles} = useGraphNetwork();
  return (
    <group ref={groupRef}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color={COLORS.signal} transparent opacity={GRAPH_CONFIG.edgeOpacity} />
      </lineSegments>
      {nodeStyles.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[node.radius, sphereSegments, sphereSegments]} />
          <meshBasicMaterial color={node.color} toneMapped={false} />
        </mesh>
      ))}
      <instancedMesh ref={pulsesRef} args={[undefined, undefined, GRAPH_CONFIG.pulseCount]}>
        <sphereGeometry args={[GRAPH_CONFIG.pulseRadius, pulseSegments, pulseSegments]} />
        <meshBasicMaterial color={COLORS.accent} toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

export default GraphNetwork;
