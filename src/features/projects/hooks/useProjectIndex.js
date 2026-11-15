import {useMemo} from 'react';
import {FileCode} from 'lucide-react';
import useBranchStops from '../../journey/hooks/useBranchStops';
import {SECTION_IDS} from '../../../constants/navigation';
import {FEATURED_PROJECTS} from '../../../data/projects';
import {coverImage, projectMeta} from '../utils/projectSummary';

function useProjectIndex() {
  const branchStops = useBranchStops(SECTION_IDS.projects);
  return useMemo(() => branchStops
    .filter((stop) => !stop.isCollection)
    .map((stop) => {
      const project = FEATURED_PROJECTS[stop.itemIndex];
      return {
        id: stop.id,
        label: stop.label,
        itemIndex: stop.itemIndex,
        meta: projectMeta(project),
        thumbnail: coverImage(project),
        icon: FileCode,
      };
    }), [branchStops]);
}

export default useProjectIndex;
