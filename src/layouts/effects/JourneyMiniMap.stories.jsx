import JourneyMiniMap from './JourneyMiniMap';

export default {
  title: 'Layouts/JourneyMiniMap',
  component: JourneyMiniMap,
  parameters: {
    viewport: {defaultViewport: 'mobile1'},
    docs: {
      description: {
        component: 'Indicador de avance para el celular: un botón redondo con un anillo que se llena a medida que se recorre la página. Al tocarlo vuelve al inicio. No aparece en la portada ni en pantallas grandes, donde el avance va en la barra de navegación.',
      },
    },
  },
};

export const AtStart = {};
