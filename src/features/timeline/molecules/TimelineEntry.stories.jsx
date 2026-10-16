import TimelineEntry from './TimelineEntry';
import {TIMELINE} from '../../../data/timeline';

export default {
  title: 'Timeline/Molecules/TimelineEntry',
  component: TimelineEntry,
  parameters: {
    docs: {
      description: {
        component: 'Entrada de la línea de tiempo. En escritorio alterna entre la columna izquierda y la derecha según su posición.',
      },
    },
  },
  decorators: [(Story) => <div className="relative w-[48rem] pl-8 md:pl-0"><Story /></div>],
  args: {
    entry: TIMELINE[0],
    position: 0,
  },
};

export const Left = {};

export const Right = {
  args: {entry: TIMELINE[1], position: 1},
};
