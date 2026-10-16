import StatCard from './StatCard';
import {STATS} from '../../../data/profile';

export default {
  title: 'About/Molecules/StatCard',
  component: StatCard,
  parameters: {
    docs: {
      description: {
        component: 'Tarjeta con una cifra destacada y su descripción.',
      },
    },
  },
  decorators: [(Story) => <div className="w-56"><Story /></div>],
  args: {
    stat: STATS[0],
  },
};

export const Average = {};

export const Ranking = {
  args: {stat: STATS[1]},
};
