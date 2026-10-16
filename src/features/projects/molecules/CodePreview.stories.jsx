import CodePreview from './CodePreview';
import {PROJECTS} from '../../../data/projects';

const codeBlocks = PROJECTS.flatMap((project) => project.media).filter((block) => block.code);

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
  args: codeBlocks[0],
};

export const Python = {};

export const R = {
  args: codeBlocks[1],
};
