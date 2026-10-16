import {Canvas} from '@react-three/fiber';
import CoreSphere from '../molecules/CoreSphere';
import JourneyNodes from '../molecules/JourneyNodes';
import JourneyRoute from '../molecules/JourneyRoute';
import AmbientField from '../molecules/AmbientField';
import useJourneyLayout from '../hooks/useJourneyLayout';
import {CAMERA_CONFIG, PIXEL_RATIO_RANGE, RENDERER_OPTIONS, SCENE_LIGHTS} from '../constants/sceneConfig';

const ambientIntensity = 0.4;
const heroStopIndex = 0;

function JourneyScene() {
  const layout = useJourneyLayout();
  return (
    <Canvas camera={CAMERA_CONFIG} dpr={PIXEL_RATIO_RANGE} gl={RENDERER_OPTIONS}>
      <ambientLight intensity={ambientIntensity} />
      {SCENE_LIGHTS.map((light) => (
        <pointLight key={light.color} position={light.position} intensity={light.intensity} color={light.color} />
      ))}
      <AmbientField />
      <JourneyRoute layout={layout} />
      <JourneyNodes layout={layout} />
      <CoreSphere position={layout.positions[heroStopIndex]} />
    </Canvas>
  );
}

export default JourneyScene;
