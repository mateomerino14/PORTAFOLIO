import TimelinePanel from './TimelinePanel';
import {TIMELINE} from '../../../data/timeline';

export default {
  title: 'Timeline/Molecules/TimelinePanel',
  component: TimelinePanel,
  parameters: {
    docs: {
      description: {
        component: 'Contenido de la parada de una etapa de la trayectoria: tipo, periodo, cargo, lugar y logros.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[34rem] rounded-2xl border border-line bg-ink/80 p-8"><Story /></div>],
  args: {
    entry: TIMELINE[1],
  },
};

export const Internship = {};

export const Freelance = {
  args: {entry: TIMELINE[0]},
};
