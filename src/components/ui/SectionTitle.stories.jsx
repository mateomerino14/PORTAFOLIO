import SectionTitle from './SectionTitle';

export default {
  title: 'UI/SectionTitle',
  component: SectionTitle,
  parameters: {
    docs: {
      description: {
        component: 'Encabezado de sección con número, etiqueta y un título cuyas palabras suben una a una.',
      },
    },
  },
  args: {
    index: '01',
    kicker: 'Sobre mí',
    title: 'Código, datos y ganas de enseñar.',
  },
};

export const Default = {};
