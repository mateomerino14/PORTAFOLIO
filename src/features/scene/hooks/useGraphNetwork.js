import {useMemo, useRef} from 'react';
import {useFrame, useThree} from '@react-three/fiber';
import {BufferAttribute, BufferGeometry, MathUtils, Object3D} from 'three';
import {GRAPH_CONFIG, NODE_COLORS} from '../constants/sceneConfig';
import {buildAdjacency, buildEdgePositions, buildSphereNodes, connectNearestNeighbors, pickRandom} from '../../../utils/graph';

const getNodeColor = (index) => {
  if (index % GRAPH_CONFIG.hubEvery === 0) {
    return NODE_COLORS.hub;
  }
  if (index % GRAPH_CONFIG.accentEvery === 0) {
    return NODE_COLORS.accent;
  }
  return NODE_COLORS.base;
};

const getNodeRadius = (index) => {
  if (index % GRAPH_CONFIG.hubEvery === 0) {
    return GRAPH_CONFIG.hubRadius;
  }
  return GRAPH_CONFIG.nodeRadius;
};

const createPulse = (edges) => {
  const [from, to] = pickRandom(edges);
  return {from, to, progress: Math.random(), speed: GRAPH_CONFIG.minPulseSpeed + Math.random() * GRAPH_CONFIG.pulseSpeedRange};
};

function useGraphNetwork() {
  const groupRef = useRef(null);
  const pulsesRef = useRef(null);
  const {pointer} = useThree();

  const graph = useMemo(() => {
    const nodes = buildSphereNodes(GRAPH_CONFIG.nodeCount, GRAPH_CONFIG.radius, GRAPH_CONFIG.jitter);
    const edges = connectNearestNeighbors(nodes, GRAPH_CONFIG.neighborCount);
    const adjacency = buildAdjacency(nodes.length, edges);
    const edgeGeometry = new BufferGeometry();
    edgeGeometry.setAttribute('position', new BufferAttribute(buildEdgePositions(nodes, edges), 3));
    const nodeStyles = nodes.map((position, index) => ({position, color: getNodeColor(index), radius: getNodeRadius(index)}));
    return {nodes, edges, adjacency, edgeGeometry, nodeStyles};
  }, []);

  const pulses = useMemo(() => Array.from({length: GRAPH_CONFIG.pulseCount}, () => createPulse(graph.edges)), [graph.edges]);
  const dummy = useMemo(() => new Object3D(), []);

  const advancePulse = (pulse, delta) => {
    pulse.progress += delta * pulse.speed;
    if (pulse.progress <= 1) {
      return;
    }
    pulse.progress = 0;
    pulse.from = pulse.to;
    pulse.to = pickRandom(graph.adjacency[pulse.from]);
  };

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) {
      return;
    }
    group.rotation.y += delta * GRAPH_CONFIG.rotationSpeed;
    group.rotation.x = MathUtils.lerp(group.rotation.x, pointer.y * GRAPH_CONFIG.pointerTiltX, GRAPH_CONFIG.followFactor);
    group.rotation.z = MathUtils.lerp(group.rotation.z, -pointer.x * GRAPH_CONFIG.pointerTiltZ, GRAPH_CONFIG.followFactor);
    group.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * GRAPH_CONFIG.breathingSpeed) * GRAPH_CONFIG.breathingAmount);

    const pulseMesh = pulsesRef.current;
    if (!pulseMesh) {
      return;
    }
    pulses.forEach((pulse, index) => {
      advancePulse(pulse, delta);
      dummy.position.lerpVectors(graph.nodes[pulse.from], graph.nodes[pulse.to], pulse.progress);
      dummy.scale.setScalar(0.6 + Math.sin(pulse.progress * Math.PI) * 0.6);
      dummy.updateMatrix();
      pulseMesh.setMatrixAt(index, dummy.matrix);
    });
    pulseMesh.instanceMatrix.needsUpdate = true;
  });

  return {groupRef, pulsesRef, edgeGeometry: graph.edgeGeometry, nodeStyles: graph.nodeStyles};
}

export default useGraphNetwork;
