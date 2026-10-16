import {useMemo} from 'react';
import useBranchStops from '../../journey/hooks/useBranchStops';
import {GROUP_ICONS} from '../constants/groupIcons';
import {SECTION_IDS} from '../../../constants/navigation';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

function useCertificationIndex() {
  const groupStops = useBranchStops(SECTION_IDS.certifications);
  return useMemo(() => groupStops.map((stop) => {
    const group = CERTIFICATION_GROUPS[stop.itemIndex];
    return {
      id: stop.id,
      label: stop.label,
      itemIndex: stop.itemIndex,
      meta: `${group.items.length} certificaciones`,
      icon: GROUP_ICONS[group.group],
    };
  }), [groupStops]);
}

export default useCertificationIndex;
