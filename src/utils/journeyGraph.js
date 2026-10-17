import {Vector3} from 'three';
import {STOP_LEVELS} from './journey';

export const VERTEX_SIZE = 3;

const SEGMENT_SIZE = VERTEX_SIZE * 2;
const centerOffset = 0.5;
const seedMultiplier = 1664525;
const seedIncrement = 1013904223;
const seedModulus = 4294967296;

const createRandom = (seed) => {
  let value = seed;
  return () => {
    value = (value * seedMultiplier + seedIncrement) % seedModulus;
    return value / seedModulus;
  };
};

const mainStopIndices = (stops) => stops
  .map((stop, index) => ({stop, index}))
  .filter(({stop}) => stop.level === STOP_LEVELS.main)
  .map(({index}) => index);

const mainPosition = (order, layout) => new Vector3(
  Math.sin(order * layout.waveX) * layout.amplitudeX,
  Math.cos(order * layout.waveY) * layout.amplitudeY,
  -order * layout.mainSpacing,
);

export const layoutJourney = (stops, layout) => {
  const positions = new Array(stops.length);
  const mains = mainStopIndices(stops);
  const mainPositions = mains.map((_, order) => mainPosition(order, layout));
  mains.forEach((stopIndex, order) => {
    positions[stopIndex] = mainPositions[order];
    const nextStopIndex = mains[order + 1];
    if (nextStopIndex === undefined) {
      return;
    }
    const branchCount = nextStopIndex - stopIndex - 1;
    for (let branch = 0; branch < branchCount; branch++) {
      const along = (branch + 1) / (branchCount + 1);
      const angle = order + branch * layout.branchAngle;
      const position = new Vector3().lerpVectors(mainPositions[order], mainPositions[order + 1], along);
      position.x += Math.cos(angle) * layout.branchRadius;
      position.y += Math.sin(angle) * layout.branchRadius * layout.branchFlatten;
      positions[stopIndex + 1 + branch] = position;
    }
  });
  return positions;
};

export const buildRouteEdges = (stopCount) => Array.from({length: stopCount - 1}, (_, index) => [index, index + 1]);

export const buildSpokeEdges = (stops) => stops.flatMap((stop, index) => {
  if (stop.level !== STOP_LEVELS.branch) {
    return [];
  }
  const parentIndex = stops.findIndex((candidate) => candidate.id === stop.groupId);
  if (parentIndex === index - 1) {
    return [];
  }
  return [[parentIndex, index]];
});

export const buildSegmentPositions = (positions, edges) => {
  const segments = new Float32Array(edges.length * SEGMENT_SIZE);
  edges.forEach(([from, to], edgeIndex) => {
    const start = positions[from];
    const end = positions[to];
    segments.set([start.x, start.y, start.z, end.x, end.y, end.z], edgeIndex * SEGMENT_SIZE);
  });
  return segments;
};

export const buildLinkSegments = (origin, targets) => {
  const segments = new Float32Array(targets.length * SEGMENT_SIZE);
  targets.forEach((target, linkIndex) => {
    segments.set([origin.x, origin.y, origin.z, target.x, target.y, target.z], linkIndex * SEGMENT_SIZE);
  });
  return segments;
};

export const scatterPoints = (count, bounds, seed) => {
  const random = createRandom(seed);
  const points = new Float32Array(count * VERTEX_SIZE);
  for (let index = 0; index < count; index++) {
    const x = (random() - centerOffset) * bounds.width;
    const y = (random() - centerOffset) * bounds.height;
    const z = bounds.near - random() * (bounds.near - bounds.far);
    points.set([x, y, z], index * VERTEX_SIZE);
  }
  return points;
};

export const ringAround = (center, count, ring, seed) => {
  const random = createRandom(seed);
  return Array.from({length: count}, (_, index) => {
    const angle = (index / count) * Math.PI * 2;
    return new Vector3(
      center.x + Math.cos(angle) * ring.radius,
      center.y + Math.sin(angle) * ring.radius * ring.flatten,
      center.z - ring.depth - random() * ring.depthJitter,
    );
  });
};
