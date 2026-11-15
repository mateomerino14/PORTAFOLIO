import {useMemo} from 'react';
import useBranchStops from '../../journey/hooks/useBranchStops';
import useProjectIndex from '../../projects/hooks/useProjectIndex';
import useOtherProjectIndex from '../../projects/hooks/useOtherProjectIndex';
import {TIMELINE_TYPE_ICONS} from '../constants/timelineTypes';
import {SECTION_IDS} from '../../../constants/navigation';
import {TIMELINE} from '../../../data/timeline';

function useTimelineIndex() {
  const timelineStops = useBranchStops(SECTION_IDS.timeline);
  const featuredIndex = useProjectIndex();
  const otherIndex = useOtherProjectIndex();
  return useMemo(() => timelineStops.map((stop) => {
    const entry = TIMELINE[stop.itemIndex];
    const relatedProjects = [...featuredIndex, ...otherIndex]
      .filter((project) => entry.projects?.includes(project.label))
      .map((project) => ({...project, thumbnail: null}));
    return {
      id: stop.id,
      label: stop.label,
      itemIndex: stop.itemIndex,
      meta: entry.period,
      icon: TIMELINE_TYPE_ICONS[entry.type],
      relatedProjects,
      hasAside: Boolean(entry.photos || entry.architecture),
      isWide: Boolean(entry.photos || entry.architecture) || relatedProjects.length > 0,
    };
  }), [timelineStops, featuredIndex, otherIndex]);
}

export default useTimelineIndex;
