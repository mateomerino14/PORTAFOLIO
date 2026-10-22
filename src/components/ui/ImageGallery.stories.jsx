import ImageGallery from './ImageGallery';
import {PROJECTS} from '../../data/projects';

const viaticos = PROJECTS.find((project) => project.title === 'Sistema de Control de Viáticos');
const brasaBrava = PROJECTS.find((project) => project.title === 'Brasa Brava');

export default {
  title: 'UI/ImageGallery',
  component: ImageGallery,
  parameters: {
    docs: {
      description: {
        component: 'Galería con miniaturas para cambiar de imagen. Avanza sola cada 5 segundos con un fundido suave mientras está a la vista; se pausa al pasar el cursor, al abrirla o si el sistema pide menos movimiento. Al tocar la imagen principal se abre ampliada; se cierra con un clic o con Escape. Con `fit="contain"` muestra la imagen completa, útil para fotos verticales. Con `fit="fill"` la imagen ocupa el alto disponible de su columna, para que el panel quede equilibrado con el texto de al lado.',
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

export const FillHeight = {
  args: {fit: 'fill'},
  decorators: [(Story) => <div className="flex h-[28rem] flex-col"><Story /></div>],
};
