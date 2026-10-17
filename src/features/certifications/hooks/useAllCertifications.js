import {useMemo} from 'react';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const allGroupName = 'Todas';

function useAllCertifications() {
  return useMemo(() => ({group: allGroupName, items: CERTIFICATION_GROUPS.flatMap((group) => group.items)}), []);
}

export default useAllCertifications;
