import {useMemo} from 'react';
import {BufferAttribute, BufferGeometry} from 'three';
import {JOURNEY_STOPS} from '../../journey/constants/journeyStops';
import {JOURNEY_LAYOUT} from '../constants/sceneConfig';
import {buildRouteEdges, buildSegmentPositions, buildSpokeEdges, layoutJourney} from '../../../utils/journeyGraph';

const createSegmentsGeometry = (positions, edges) => {
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(buildSegmentPositions(positions, edges), 3));
  return geometry;
};

function useJourneyLayout() {
  return useMemo(() => {
    const positions = layoutJourney(JOURNEY_STOPS, JOURNEY_LAYOUT);
    const routeEdges = buildRouteEdges(JOURNEY_STOPS.length);
    const spokeGeometry = createSegmentsGeometry(positions, buildSpokeEdges(JOURNEY_STOPS));
    return {stops: JOURNEY_STOPS, positions, routeEdges, spokeGeometry, createSegmentsGeometry};
  }, []);
}

export default useJourneyLayout;
