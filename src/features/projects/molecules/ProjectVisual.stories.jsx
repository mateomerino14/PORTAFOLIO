import ProjectVisual from './ProjectVisual';
import {PROJECT_ACCENTS} from '../constants/projectAccents';

export default {
  title: 'Projects/Molecules/ProjectVisual',
  component: ProjectVisual,
  parameters: {
    docs: {
      description: {
        component: 'Ilustración animada de cada proyecto, coloreada con el acento que le corresponde.',
      },
    },
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
  args: {
    kind: 'Web full stack',
    accent: PROJECT_ACCENTS.lime,
    position: 0,
  },
};

export const Lime = {};

export const Violet = {
  args: {accent: PROJECT_ACCENTS.violet, position: 1},
};

export const Cyan = {
  args: {accent: PROJECT_ACCENTS.cyan, position: 2},
};
