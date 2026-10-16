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
    accent: PROJECT_ACCENTS.accent,
    position: 0,
  },
};

export const Accent = {};

export const Signal = {
  args: {accent: PROJECT_ACCENTS.signal, position: 1},
};

export const Mist = {
  args: {accent: PROJECT_ACCENTS.mist, position: 2},
};
