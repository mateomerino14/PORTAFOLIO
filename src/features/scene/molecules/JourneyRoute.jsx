import {useMemo} from 'react';
import {COLORS} from '../../../constants';
import {ROUTE_STYLE} from '../constants/sceneConfig';

function JourneyRoute({layout, activeIndex}) {
  const {positions, routeEdges, spokeGeometry, createSegmentsGeometry} = layout;

  const geometries = useMemo(() => ({
    visited: createSegmentsGeometry(positions, routeEdges.slice(0, activeIndex)),
    pending: createSegmentsGeometry(positions, routeEdges.slice(activeIndex)),
  }), [positions, routeEdges, activeIndex, createSegmentsGeometry]);

  return (
    <group>
      <lineSegments geometry={geometries.visited}>
        <lineBasicMaterial color={COLORS.accent} transparent opacity={ROUTE_STYLE.visitedOpacity} />
      </lineSegments>
      <lineSegments geometry={geometries.pending}>
        <lineBasicMaterial color={COLORS.fog} transparent opacity={ROUTE_STYLE.pendingOpacity} />
      </lineSegments>
      <lineSegments geometry={spokeGeometry}>
        <lineBasicMaterial color={COLORS.signal} transparent opacity={ROUTE_STYLE.spokeOpacity} />
      </lineSegments>
    </group>
  );
}

export default JourneyRoute;
