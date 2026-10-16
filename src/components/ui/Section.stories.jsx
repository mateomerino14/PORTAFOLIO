import Section from './Section';

export default {
  title: 'UI/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Contenedor de cada sección de la página: aplica el espaciado vertical y el ancho máximo del contenido.',
      },
    },
  },
  args: {
    id: 'ejemplo',
    children: <p className="text-paper">Contenido de la sección</p>,
  },
};

export const Default = {};
