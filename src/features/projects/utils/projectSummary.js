import {MEDIA_TYPES} from '../../../data/projects';

const metaSeparator = ' · ';

export const coverImage = (project) => {
  if (project.cover) {
    return project.cover;
  }
  const gallery = project.media.find((block) => block.type === MEDIA_TYPES.gallery);
  if (!gallery) {
    return null;
  }
  return gallery.images[0].src;
};

export const projectMeta = (project) => [project.context, project.kind].join(metaSeparator);
