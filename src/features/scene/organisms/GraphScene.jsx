import {Canvas} from '@react-three/fiber';
import {Sparkles} from '@react-three/drei';
import GraphNetwork from '../molecules/GraphNetwork';
import {CAMERA_CONFIG, SCENE_LIGHTS} from '../constants/sceneConfig';
import {COLORS} from '../../../constants';

const pixelRatioRange = [1, 1.75];
const rendererOptions = {antialias: true, alpha: true, powerPreference: 'high-performance'};
const sparklesScale = [9, 6, 4];

function GraphScene() {
  return (
    <Canvas camera={CAMERA_CONFIG} dpr={pixelRatioRange} gl={rendererOptions}>
      <ambientLight intensity={0.4} />
      {SCENE_LIGHTS.map((light) => (
        <pointLight key={light.color} position={light.position} intensity={light.intensity} color={light.color} />
      ))}
      <GraphNetwork />
      <Sparkles count={60} scale={sparklesScale} size={1.6} speed={0.3} color={COLORS.paper} opacity={0.35} />
    </Canvas>
  );
}

export default GraphScene;
