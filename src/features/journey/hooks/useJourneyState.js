import {useSyncExternalStore} from 'react';
import {journeyStore} from '../store/journeyStore';
import {JOURNEY_STOPS} from '../constants/journeyStops';

export function useActiveStopIndex() {
  return useSyncExternalStore(journeyStore.subscribe, journeyStore.getActiveIndex);
}

export function useActiveStop() {
  const activeIndex = useActiveStopIndex();
  return JOURNEY_STOPS[activeIndex];
}

export function useHoveredTech() {
  return useSyncExternalStore(journeyStore.subscribe, journeyStore.getHoveredTech);
}
