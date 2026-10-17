import {useMemo} from 'react';
import {FileCode} from 'lucide-react';
import useBranchStops from '../../journey/hooks/useBranchStops';
import {SECTION_IDS} from '../../../constants/navigation';
import {MEDIA_TYPES, PROJECTS} from '../../../data/projects';

const metaSeparator = ' · ';

const coverImage = (project) => {
  if (project.cover) {
    return project.cover;
  }
  const gallery = project.media.find((block) => block.type === MEDIA_TYPES.gallery);
  if (!gallery) {
    return null;
  }
  return gallery.images[0].src;
};

function useProjectIndex() {
  const projectStops = useBranchStops(SECTION_IDS.projects);
  return useMemo(() => projectStops.map((stop) => {
    const project = PROJECTS[stop.itemIndex];
    return {
      id: stop.id,
      label: stop.label,
      itemIndex: stop.itemIndex,
      meta: [project.context, project.kind].join(metaSeparator),
      thumbnail: coverImage(project),
      icon: FileCode,
    };
  }), [projectStops]);
}

export default useProjectIndex;
