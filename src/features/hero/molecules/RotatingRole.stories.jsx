import RotatingRole from './RotatingRole';

export default {
  title: 'Hero/Molecules/RotatingRole',
  component: RotatingRole,
  parameters: {
    docs: {
      description: {
        component: 'Texto que alterna entre los roles indicados con una transición vertical.',
      },
    },
  },
  decorators: [(Story) => <p className="font-display text-3xl font-semibold"><Story /></p>],
  args: {
    roles: ['Full Stack Developer', 'Analista de Datos', 'Asistente de Cátedra'],
  },
};

export const Default = {};
