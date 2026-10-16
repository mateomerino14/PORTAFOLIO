import {Vector3} from 'three';

const goldenAngle = Math.PI * (3 - Math.sqrt(5));
const jitterSeed = 12.9898;

export const buildSphereNodes = (nodeCount, radius, jitter) => {
  const nodes = [];
  for (let index = 0; index < nodeCount; index++) {
    const y = 1 - (index / (nodeCount - 1)) * 2;
    const ringRadius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;
    const scale = radius * (1 + Math.sin(index * jitterSeed) * jitter);
    nodes.push(new Vector3(Math.cos(theta) * ringRadius, y, Math.sin(theta) * ringRadius).multiplyScalar(scale));
  }
  return nodes;
};

export const connectNearestNeighbors = (nodes, neighborCount) => {
  const edgeKeys = new Set();
  const edges = [];
  nodes.forEach((origin, originIndex) => {
    const nearest = nodes
      .map((target, targetIndex) => ({targetIndex, distance: origin.distanceTo(target)}))
      .filter((candidate) => candidate.targetIndex !== originIndex)
      .sort((first, second) => first.distance - second.distance)
      .slice(0, neighborCount);
    nearest.forEach(({targetIndex}) => {
      const low = Math.min(originIndex, targetIndex);
      const high = Math.max(originIndex, targetIndex);
      const key = `${low}-${high}`;
      if (!edgeKeys.has(key)) {
        edgeKeys.add(key);
        edges.push([low, high]);
      }
    });
  });
  return edges;
};

export const buildAdjacency = (nodeCount, edges) => {
  const adjacency = Array.from({length: nodeCount}, () => []);
  edges.forEach(([first, second]) => {
    adjacency[first].push(second);
    adjacency[second].push(first);
  });
  return adjacency;
};

export const buildEdgePositions = (nodes, edges) => {
  const positions = new Float32Array(edges.length * 6);
  edges.forEach(([first, second], edgeIndex) => {
    const start = nodes[first];
    const end = nodes[second];
    positions.set([start.x, start.y, start.z, end.x, end.y, end.z], edgeIndex * 6);
  });
  return positions;
};

export const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];
