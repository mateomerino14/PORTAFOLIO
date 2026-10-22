import {useMemo} from 'react';
import {countedHours, yearsOf} from './useCertificationSummary';
import {GROUP_ICONS} from '../constants/groupIcons';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const percent = 100;

function useCertificationOverview() {
  return useMemo(() => {
    const items = CERTIFICATION_GROUPS.flatMap((group) => group.items);
    const areas = CERTIFICATION_GROUPS.map((group) => ({name: group.group, icon: GROUP_ICONS[group.group], count: group.items.length, hours: countedHours(group.items)}));
    const maxHours = Math.max(...areas.map((area) => area.hours));
    return {
      stats: [
        {value: items.length, label: 'Certificados'},
        {value: `${countedHours(items)} h`, label: 'Formación'},
        {value: yearsOf(items)[0], label: 'Desde'},
      ],
      areas: areas.map((area) => ({...area, share: area.hours / maxHours * percent})),
    };
  }, []);
}

export default useCertificationOverview;
