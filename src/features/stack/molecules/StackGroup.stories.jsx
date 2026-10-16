import StackGroup from './StackGroup';
import {STACK_GROUPS} from '../../../data/stack';

export default {
  title: 'Stack/Molecules/StackGroup',
  component: StackGroup,
  parameters: {
    docs: {
      description: {
        component: 'Fila de una categoría del stack con su ícono y las tecnologías que la componen.',
      },
    },
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
  args: {
    group: STACK_GROUPS[0],
  },
};

export const Languages = {};

export const Backend = {
  args: {group: STACK_GROUPS[2]},
};
