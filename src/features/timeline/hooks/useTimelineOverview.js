import {useMemo} from 'react';
import {TIMELINE} from '../../../data/timeline';

const awardType = 'award';
const yearPattern = /\d{4}/g;

function useTimelineOverview() {
  return useMemo(() => {
    const years = TIMELINE.flatMap((entry) => entry.period.match(yearPattern).map(Number));
    const featured = TIMELINE.find((entry) => entry.photos);
    return {
      stages: TIMELINE.length,
      since: Math.min(...years),
      awards: TIMELINE.filter((entry) => entry.type === awardType).length,
      featured: {title: featured.title, period: featured.period, image: featured.photos[0]},
    };
  }, []);
}

export default useTimelineOverview;
