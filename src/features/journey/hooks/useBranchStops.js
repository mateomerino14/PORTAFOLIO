import {useMemo} from 'react';
import {JOURNEY_STOPS} from '../constants/journeyStops';
import {STOP_LEVELS} from '../../../utils/journey';

function useBranchStops(groupId) {
  return useMemo(() => JOURNEY_STOPS.filter((stop) => stop.groupId === groupId && stop.level === STOP_LEVELS.branch), [groupId]);
}

export default useBranchStops;
