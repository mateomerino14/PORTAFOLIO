import {COLORS} from '../../../constants';

export const JOURNEY_LAYOUT = {
  mainSpacing: 9,
  amplitudeX: 3.2,
  amplitudeY: 1.6,
  waveX: 1.1,
  waveY: 0.8,
  branchRadius: 2.6,
  branchFlatten: 0.7,
  branchAngle: 1.9,
};

export const NODE_SIZES = {
  main: 0.16,
  branch: 0.09,
  activeScale: 1.35,
  haloScale: 2.6,
  haloOpacity: 0.18,
  segments: 24,
};

export const NODE_FADE = {
  near: 2.4,
  far: 5.2,
};

export const LABEL_RANGE = 3;

export const NODE_COLORS = {
  main: COLORS.accent,
  branch: COLORS.signal,
  visited: COLORS.fog,
};

export const ROUTE_STYLE = {
  visitedOpacity: 0.85,
  pendingOpacity: 0.22,
  spokeOpacity: 0.12,
};

export const AMBIENT_FIELD = {
  count: 320,
  bounds: {width: 46, height: 26, near: 12, far: -130},
  seed: 20260516,
  size: 0.06,
  opacity: 0.55,
};

export const LABEL_OFFSET_PX = 12;

export const LABEL_COLLISION_PX = {x: 140, y: 18};

export const CAMERA_CONFIG = {position: [-4, 4, 9], fov: 50, near: 0.1, far: 200};

export const CAMERA_VIEWS = {
  wide: {
    overview: {offset: [-4, 2.4, 9], lookShift: [-6, -1, -6]},
    stop: {offset: [0.9, 0.7, 5.8], lookShift: [-1.9, 0, 0]},
  },
  compact: {
    overview: {offset: [-2.5, 3, 11], lookShift: [-0.8, -3.6, -5]},
    stop: {offset: [0.3, 1, 7.5], lookShift: [0, -1.6, 0]},
  },
};

export const COMPACT_MAX_WIDTH_PX = 768;

export const CAMERA_MOTION = {
  followRate: 3.2,
  pointerParallax: 0.35,
  dwell: {start: 0.25, end: 0.75},
};

export const PULSE_STYLE = {
  radius: 0.09,
  maxScale: 1.8,
  segments: 16,
  visibleFrom: 0.02,
  visibleTo: 0.98,
};

export const SCENE_LIGHTS = [
  {position: [4, 3, 4], intensity: 40, color: COLORS.accent},
  {position: [-4, -2, 2], intensity: 40, color: COLORS.signal},
];

export const RENDERER_OPTIONS = {antialias: true, alpha: true, powerPreference: 'high-performance'};

export const PIXEL_RATIO_RANGE = [1, 1.5];

export const TECH_STYLE = {
  ring: {radius: 1.55, flatten: 0.85, depth: 1.2, depthJitter: 0.8},
  seed: 1907,
  radius: 0.045,
  hoveredScale: 2.2,
  idleOpacity: 0.05,
  nearbyOpacity: 0.18,
  hoveredOpacity: 0.9,
  dimmedOpacity: 0.03,
  segments: 12,
};
