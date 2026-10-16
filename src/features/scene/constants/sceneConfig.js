import {COLORS} from '../../../constants';

export const GRAPH_CONFIG = {
  nodeCount: 56,
  radius: 1.85,
  jitter: 0.09,
  neighborCount: 3,
  pulseCount: 18,
  minPulseSpeed: 0.25,
  pulseSpeedRange: 0.45,
  rotationSpeed: 0.12,
  pointerTiltX: 0.35,
  pointerTiltZ: 0.2,
  followFactor: 0.05,
  breathingSpeed: 0.8,
  breathingAmount: 0.015,
  edgeOpacity: 0.28,
  hubEvery: 7,
  accentEvery: 3,
  hubRadius: 0.075,
  nodeRadius: 0.045,
  pulseRadius: 0.04,
};

export const CAMERA_CONFIG = {position: [0, 0, 7], fov: 45};

export const SCENE_LIGHTS = [
  {position: [4, 3, 4], intensity: 40, color: COLORS.lime},
  {position: [-4, -2, 2], intensity: 40, color: COLORS.violet},
  {position: [0, 4, -3], intensity: 25, color: COLORS.cyan},
];

export const NODE_COLORS = {
  hub: COLORS.lime,
  accent: COLORS.cyan,
  base: COLORS.violet,
};
