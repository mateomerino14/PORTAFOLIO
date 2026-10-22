import ProjectPanel from './ProjectPanel';
import {PROJECTS} from '../../../data/projects';

const projectNamed = (title) => PROJECTS.find((project) => project.title === title);

export default {
  title: 'Projects/Molecules/ProjectPanel',
  component: ProjectPanel,
  parameters: {
    docs: {
      description: {
        component: 'Contenido de la parada de un proyecto: contexto, descripción, aspectos destacados, tecnologías y enlaces.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[64rem] rounded-2xl border border-line bg-ink/80 p-8"><Story /></div>],
  args: {
    project: projectNamed('Sistema de Control de Viáticos'),
  },
};

export const PrivateCode = {};

export const SingleLink = {
  args: {project: projectNamed('Diagramador de flujo SVG')},
};

export const WithCode = {
  args: {project: projectNamed('Chat grupal con sockets')},
};

export const WithModel = {
  args: {project: projectNamed('Capilla con bibliotecaria en 3D')},
};
