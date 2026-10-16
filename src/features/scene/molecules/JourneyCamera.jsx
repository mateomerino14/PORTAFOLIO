import useJourneyCamera from '../hooks/useJourneyCamera';

function JourneyCamera({positions, isReducedMotion}) {
  useJourneyCamera(positions, isReducedMotion);
  return null;
}

export default JourneyCamera;
