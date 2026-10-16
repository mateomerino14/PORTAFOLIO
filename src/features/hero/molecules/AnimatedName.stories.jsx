import AnimatedName from './AnimatedName';

export default {
  title: 'Hero/Molecules/AnimatedName',
  component: AnimatedName,
  parameters: {
    docs: {
      description: {
        component: 'Nombre de la portada que aparece letra por letra; el apellido se dibuja solo con contorno.',
      },
    },
  },
  args: {
    firstName: 'Mateo',
    lastName: 'Merino',
  },
};

export const Default = {};
