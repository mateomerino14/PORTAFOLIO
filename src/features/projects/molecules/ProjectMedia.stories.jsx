import ProjectMedia from './ProjectMedia';
import {PROJECTS} from '../../../data/projects';

const simulation = PROJECTS.find((project) => project.media.length > 1);
const [viaticos] = PROJECTS;

export default {
  title: 'Projects/Molecules/ProjectMedia',
  component: ProjectMedia,
  parameters: {
    docs: {
      description: {
        component: 'Material visual de un proyecto: capturas, gráficos o código. Si el proyecto tiene más de un tipo, se muestran pestañas para cambiar entre ellos.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[36rem]"><Story /></div>],
  args: {
    title: simulation.title,
    blocks: simulation.media,
  },
};

export const WithTabs = {};

export const SingleBlock = {
  args: {title: viaticos.title, blocks: viaticos.media},
};
