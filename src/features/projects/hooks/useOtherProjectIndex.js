import {useMemo} from 'react';
import {FileCode} from 'lucide-react';
import {SECTION_IDS} from '../../../constants/navigation';
import {OTHER_PROJECTS} from '../../../data/projects';
import {coverImage, projectMeta} from '../utils/projectSummary';

function useOtherProjectIndex() {
  return useMemo(() => OTHER_PROJECTS.map((project, itemIndex) => ({
    id: `${SECTION_IDS.otherProjects}-${itemIndex + 1}`,
    target: SECTION_IDS.otherProjects,
    label: project.title,
    itemIndex,
    meta: projectMeta(project),
    thumbnail: coverImage(project),
    icon: FileCode,
  })), []);
}

export default useOtherProjectIndex;
