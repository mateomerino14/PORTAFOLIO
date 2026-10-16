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
  main: 0.2,
  branch: 0.11,
  activeScale: 1.6,
  segments: 24,
};

export const NODE_COLORS = {
  main: COLORS.accent,
  branch: COLORS.signal,
  visited: COLORS.paper,
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

export const LABEL_OFFSET_Y = -0.42;

export const CAMERA_CONFIG = {position: [9, 5, 14], fov: 50, near: 0.1, far: 200};

export const SCENE_LIGHTS = [
  {position: [4, 3, 4], intensity: 40, color: COLORS.accent},
  {position: [-4, -2, 2], intensity: 40, color: COLORS.signal},
];

export const RENDERER_OPTIONS = {antialias: true, alpha: true, powerPreference: 'high-performance'};

export const PIXEL_RATIO_RANGE = [1, 1.5];
