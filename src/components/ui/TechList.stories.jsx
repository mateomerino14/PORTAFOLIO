import {fn} from 'storybook/test';
import TechList from './TechList';

export default {
  title: 'UI/TechList',
  component: TechList,
  parameters: {
    docs: {
      description: {
        component: 'Lista de tecnologías en una sola línea de texto, separadas por un punto medio. Las que están en `interactiveItems` se pueden señalar para resaltarlas en la escena 3D.',
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
