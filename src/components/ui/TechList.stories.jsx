import {fn} from 'storybook/test';
import TechList from './TechList';

export default {
  title: 'UI/TechList',
  component: TechList,
  parameters: {
    docs: {
      description: {
        component: 'Lista de tecnologías con su logo. Las que están en `interactiveItems` tienen borde punteado y se pueden señalar para resaltarlas en la escena 3D.',
      },
    },
  },
  args: {
    items: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
};

export const Default = {};

export const Interactive = {
  args: {
    interactiveItems: new Set(['React', 'PostgreSQL']),
    activeItem: 'React',
    onItemEnter: fn(),
    onItemLeave: fn(),
  },
};
