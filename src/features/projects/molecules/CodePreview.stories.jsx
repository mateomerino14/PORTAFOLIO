import CodePreview from './CodePreview';
import {PROJECTS} from '../../../data/projects';

const codeProjects = PROJECTS.filter((project) => project.media.code);

export default {
  title: 'Projects/Molecules/CodePreview',
  component: CodePreview,
  parameters: {
    docs: {
      description: {
        component: 'Fragmento real del código de un proyecto, para los que no tienen capturas de pantalla.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[36rem]"><Story /></div>],
  args: codeProjects[0].media,
};

export const Python = {};

export const R = {
  args: codeProjects[1].media,
};
