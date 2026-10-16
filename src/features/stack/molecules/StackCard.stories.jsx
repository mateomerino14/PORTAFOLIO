import StackCard from './StackCard';
import {STACK_GROUPS} from '../../../data/stack';

export default {
  title: 'Stack/Molecules/StackCard',
  component: StackCard,
  parameters: {
    docs: {
      description: {
        component: 'Tarjeta de una categoría del stack con su ícono y las tecnologías que la componen.',
      },
    },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
  args: {
    group: STACK_GROUPS[0],
  },
};

export const Languages = {};

export const Backend = {
  args: {group: STACK_GROUPS[2]},
};
