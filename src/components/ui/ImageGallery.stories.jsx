import ImageGallery from './ImageGallery';
import {PROJECTS} from '../../data/projects';

const [viaticos, , brasaBrava] = PROJECTS;

export default {
  title: 'UI/ImageGallery',
  component: ImageGallery,
  parameters: {
    docs: {
      description: {
        component: 'Galería con miniaturas para cambiar de imagen. Al tocar la imagen principal se abre ampliada; se cierra con un clic o con Escape. Con `fit="contain"` muestra la imagen completa, útil para fotos verticales.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[36rem]"><Story /></div>],
  args: {
    title: brasaBrava.title,
    images: brasaBrava.media[0].images,
    note: brasaBrava.media[0].note,
  },
};

export const SeveralImages = {};

export const OtherProject = {
  args: {title: viaticos.title, images: viaticos.media[0].images, note: viaticos.media[0].note},
};
