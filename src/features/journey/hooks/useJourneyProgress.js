import {useMemo} from 'react';
import {useActiveStopIndex} from './useJourneyState';
import {JOURNEY_STOPS} from '../constants/journeyStops';
import {STOP_LEVELS} from '../../../utils/journey';

const lastIndex = JOURNEY_STOPS.length - 1;
const indexedStops = JOURNEY_STOPS.map((stop, index) => ({...stop, index}));
const mainStops = indexedStops.filter((stop) => stop.level === STOP_LEVELS.main);

const branchesOf = (groupId, activeIndex) => indexedStops
  .filter((stop) => stop.groupId === groupId && stop.level === STOP_LEVELS.branch)
  .map((stop) => ({id: stop.id, label: stop.label, isActive: stop.index === activeIndex, isVisited: stop.index < activeIndex}));

function useJourneyProgress() {
  const activeIndex = useActiveStopIndex();
  return useMemo(() => {
    const activeGroupId = JOURNEY_STOPS[activeIndex].groupId;
    const branches = branchesOf(activeGroupId, activeIndex);
    return {
      activeGroupId,
      groupLabel: mainStops.find((stop) => stop.id === activeGroupId).label,
      branches,
      branchPosition: branches.findIndex((branch) => branch.isActive),
      ratio: activeIndex / lastIndex,
      sections: mainStops.map((stop) => ({id: stop.id, label: stop.label, isActive: stop.id === activeGroupId, isVisited: stop.index < activeIndex})),
    };
  }, [activeIndex]);
}

export default useJourneyProgress;
