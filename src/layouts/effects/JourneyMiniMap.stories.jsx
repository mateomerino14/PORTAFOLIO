import JourneyMiniMap from './JourneyMiniMap';

export default {
  title: 'Layouts/JourneyMiniMap',
  component: JourneyMiniMap,
  parameters: {
    viewport: {defaultViewport: 'mobile1'},
    docs: {
      description: {
        component: 'Minimapa del recorrido para el celular. Muestra la sección y el ítem actual con un anillo que se llena según el avance; al tocarlo se abre la lista de secciones con las subparadas de la actual, centrada en la que está a la vista. Se oculta en pantallas grandes, donde el avance va en la barra de navegación.',
      },
    },
  },
  decorators: [(Story) => <div className="h-[32rem]"><Story /></div>],
};

export const Closed = {};
