import ProjectPanel from './ProjectPanel';
import {PROJECTS} from '../../../data/projects';

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
  decorators: [(Story) => <div className="w-[34rem] rounded-2xl border border-line bg-ink/80 p-8"><Story /></div>],
  args: {
    project: PROJECTS[0],
  },
};

export const MultipleLinks = {};

export const SingleLink = {
  args: {project: PROJECTS[2]},
};
