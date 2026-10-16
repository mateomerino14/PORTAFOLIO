import {Canvas} from '@react-three/fiber';
import CoreSphere from '../molecules/CoreSphere';
import JourneyNodes from '../molecules/JourneyNodes';
import JourneyRoute from '../molecules/JourneyRoute';
import AmbientField from '../molecules/AmbientField';
import JourneyCamera from '../molecules/JourneyCamera';
import TravelPulse from '../molecules/TravelPulse';
import TechLinks from '../molecules/TechLinks';
import LabelProjector from '../molecules/LabelProjector';
import useJourneyLayout from '../hooks/useJourneyLayout';
import useMediaQuery from '../../../hooks/shared/useMediaQuery';
import {MEDIA_QUERIES} from '../../../constants';
import {CAMERA_CONFIG, PIXEL_RATIO_RANGE, RENDERER_OPTIONS, SCENE_LIGHTS} from '../constants/sceneConfig';

const ambientIntensity = 0.4;
const heroStopIndex = 0;

function JourneyScene() {
  const layout = useJourneyLayout();
  const isReducedMotion = useMediaQuery(MEDIA_QUERIES.reducedMotion);
  return (
    <Canvas camera={CAMERA_CONFIG} dpr={PIXEL_RATIO_RANGE} gl={RENDERER_OPTIONS}>
      <ambientLight intensity={ambientIntensity} />
      {SCENE_LIGHTS.map((light) => (
        <pointLight key={light.color} position={light.position} intensity={light.intensity} color={light.color} />
      ))}
      <JourneyCamera positions={layout.positions} isReducedMotion={isReducedMotion} />
      <AmbientField />
      <JourneyRoute layout={layout} />
      <TechLinks positions={layout.positions} techPositions={layout.techPositions} />
      <JourneyNodes layout={layout} />
      <TravelPulse positions={layout.positions} isReducedMotion={isReducedMotion} />
      <LabelProjector anchors={layout.anchors} />
      <CoreSphere position={layout.positions[heroStopIndex]} isReducedMotion={isReducedMotion} />
    </Canvas>
  );
}

export default JourneyScene;
