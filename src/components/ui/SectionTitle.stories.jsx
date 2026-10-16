import SectionTitle from './SectionTitle';

export default {
  title: 'UI/SectionTitle',
  component: SectionTitle,
  parameters: {
    docs: {
      description: {
        component: 'Título de sección cuyas palabras suben una a una al entrar en pantalla.',
      },
    },
  },
  args: {
    title: 'Sobre mí',
  },
};

export const Default = {};
