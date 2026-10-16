import {Canvas} from '@react-three/fiber';
import {Sparkles} from '@react-three/drei';
import CoreSphere from '../molecules/CoreSphere';
import GraphNetwork from '../molecules/GraphNetwork';
import {CAMERA_CONFIG, SCENE_LIGHTS} from '../constants/sceneConfig';
import {COLORS} from '../../../constants';

const pixelRatioRange = [1, 1.75];
const rendererOptions = {antialias: true, alpha: true, powerPreference: 'high-performance'};
const ambientIntensity = 0.4;
const sparklesConfig = {count: 60, scale: [9, 6, 4], size: 1.6, speed: 0.3, opacity: 0.35};

function GraphScene() {
  return (
    <Canvas camera={CAMERA_CONFIG} dpr={pixelRatioRange} gl={rendererOptions}>
      <ambientLight intensity={ambientIntensity} />
      {SCENE_LIGHTS.map((light) => (
        <pointLight key={light.color} position={light.position} intensity={light.intensity} color={light.color} />
      ))}
      <CoreSphere />
      <GraphNetwork />
      <Sparkles {...sparklesConfig} color={COLORS.paper} />
    </Canvas>
  );
}

export default GraphScene;
