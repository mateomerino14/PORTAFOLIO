import TimelinePanel from './TimelinePanel';
import {TIMELINE} from '../../../data/timeline';

export default {
  title: 'Timeline/Molecules/TimelinePanel',
  component: TimelinePanel,
  parameters: {
    docs: {
      description: {
        component: 'Contenido de la parada de una etapa de la trayectoria: tipo, periodo, cargo, lugar y logros. Si la etapa tiene fotos, se muestran en una galería al costado.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[34rem] rounded-2xl border border-line bg-ink/80 p-8"><Story /></div>],
  args: {
    entry: TIMELINE[2],
  },
};

export const Internship = {};

export const Freelance = {
  args: {entry: TIMELINE[1]},
};

export const WithPhotos = {
  args: {entry: TIMELINE[0]},
  decorators: [(Story) => <div className="w-[60rem]"><Story /></div>],
};
