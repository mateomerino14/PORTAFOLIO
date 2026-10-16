import TechList from './TechList';

export default {
  title: 'UI/TechList',
  component: TechList,
  parameters: {
    docs: {
      description: {
        component: 'Lista de tecnologías en una sola línea de texto, separadas por un punto medio.',
      },
    },
  },
  args: {
    items: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
};

export const Default = {};
