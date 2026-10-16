import {useMemo} from 'react';
import {BufferAttribute, BufferGeometry} from 'three';
import {JOURNEY_STOPS} from '../../journey/constants/journeyStops';
import {TECH_NODES} from '../../journey/constants/techLinks';
import {SECTION_IDS} from '../../../constants/navigation';
import {JOURNEY_LAYOUT, TECH_STYLE} from '../constants/sceneConfig';
import {stopLabelId, techLabelId} from '../constants/labelIds';
import {buildRouteEdges, buildSegmentPositions, buildSpokeEdges, layoutJourney, ringAround} from '../../../utils/journeyGraph';

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
    const stackIndex = JOURNEY_STOPS.findIndex((stop) => stop.id === SECTION_IDS.stack);
    const techPositions = ringAround(positions[stackIndex], TECH_NODES.length, TECH_STYLE.ring, TECH_STYLE.seed);
    const anchors = new Map([
      ...JOURNEY_STOPS.map((stop, index) => [stopLabelId(stop.id), positions[index]]),
      ...TECH_NODES.map((node, index) => [techLabelId(node.tech), techPositions[index]]),
    ]);
    return {stops: JOURNEY_STOPS, positions, routeEdges, spokeGeometry, techPositions, anchors, createSegmentsGeometry};
  }, []);
}

export default useJourneyLayout;
