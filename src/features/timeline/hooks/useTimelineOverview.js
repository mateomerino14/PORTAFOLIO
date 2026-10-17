import {useMemo} from 'react';
import {TIMELINE} from '../../../data/timeline';
import {parsePeriod} from '../../../utils/period';

const awardType = 'award';
const percent = 100;

function useTimelineOverview() {
  return useMemo(() => {
    const periods = TIMELINE.map((entry) => ({entry, ...parsePeriod(entry.period)}));
    const firstYear = Math.floor(Math.min(...periods.map((item) => item.start)));
    const lastYear = Math.ceil(Math.max(...periods.map((item) => item.end)));
    const span = lastYear - firstYear;
    const toPercent = (value) => (value - firstYear) / span * percent;
    return {
      stages: TIMELINE.length,
      since: firstYear,
      awards: TIMELINE.filter((entry) => entry.type === awardType).length,
      years: Array.from({length: span + 1}, (_, index) => ({year: firstYear + index, offset: index / span * percent})),
      rows: [...periods].sort((first, second) => first.start - second.start).map((item) => ({
        title: item.entry.title,
        type: item.entry.type,
        isPoint: item.isMoment || item.entry.type === awardType,
        left: toPercent(item.start),
        width: toPercent(item.end) - toPercent(item.start),
      })),
    };
  }, []);
}

export default useTimelineOverview;
