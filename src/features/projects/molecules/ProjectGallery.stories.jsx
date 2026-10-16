import ProjectGallery from './ProjectGallery';
import {PROJECTS} from '../../../data/projects';

const [viaticos, , brasaBrava] = PROJECTS;

export default {
  title: 'Projects/Molecules/ProjectGallery',
  component: ProjectGallery,
  parameters: {
    docs: {
      description: {
        component: 'Capturas de un proyecto con miniaturas para cambiar de imagen. Al tocar la imagen principal se abre ampliada; se cierra con un clic o con Escape.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[36rem]"><Story /></div>],
  args: {
    title: brasaBrava.title,
    images: brasaBrava.media.images,
    note: brasaBrava.media.note,
  },
};

export const SeveralImages = {};

export const OtherProject = {
  args: {title: viaticos.title, images: viaticos.media.images, note: viaticos.media.note},
};
