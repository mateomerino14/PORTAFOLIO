import ModelViewer from './ModelViewer';
import {MEDIA_TYPES, PROJECTS} from '../../data/projects';

const chapel = PROJECTS.find((project) => project.media.some((block) => block.type === MEDIA_TYPES.model));
const model = chapel.media.find((block) => block.type === MEDIA_TYPES.model);

export default {
  title: 'UI/ModelViewer',
  component: ModelViewer,
  parameters: {
    docs: {
      description: {
        component: 'Visor de un modelo glTF que se recorre en vivo: arrastrar gira la cámara dentro de los límites del modelo y la rueda o el pellizco acercan. La escena 3D se carga solo cuando el visor aparece, y si el navegador no tiene WebGL muestra un aviso en su lugar.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[36rem]"><Story /></div>],
  args: {
    title: chapel.title,
    src: model.src,
    rotation: model.rotation,
    camera: model.camera,
    lights: model.lights,
    controls: model.controls,
    note: model.note,
  },
};

export const Chapel = {};
