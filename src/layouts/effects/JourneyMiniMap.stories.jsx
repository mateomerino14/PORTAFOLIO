import JourneyMiniMap from './JourneyMiniMap';

export default {
  title: 'Layouts/JourneyMiniMap',
  component: JourneyMiniMap,
  parameters: {
    viewport: {defaultViewport: 'mobile1'},
    docs: {
      description: {
        component: 'Indicador de avance para el celular: la sección y el ítem actual junto a un círculo con un anillo que se llena a medida que se recorre la página. Solo informa, no abre ningún menú. Se oculta en pantallas grandes, donde el avance va en la barra de navegación.',
      },
    },
  },
};

export const AtStart = {};
