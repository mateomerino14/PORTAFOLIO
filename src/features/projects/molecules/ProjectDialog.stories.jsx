import ProjectDialog from './ProjectDialog';
import {OTHER_PROJECTS} from '../../../data/projects';

export default {
  title: 'Projects/Molecules/ProjectDialog',
  component: ProjectDialog,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Ventana con el detalle completo de un proyecto que no es destacado: descripción, tecnologías, enlaces y capturas.',
      },
    },
  },
  args: {
    project: OTHER_PROJECTS[0],
    onClose: () => {},
  },
};

export const Open = {};

export const Closed = {
  args: {project: null},
};
