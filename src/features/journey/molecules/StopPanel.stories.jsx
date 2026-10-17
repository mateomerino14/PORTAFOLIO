import StopPanel from './StopPanel';

export default {
  title: 'Journey/Molecules/StopPanel',
  component: StopPanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Parada del recorrido: una sección de pantalla completa con su contenido en un panel. La escena 3D usa su posición para mover la cámara.',
      },
    },
  },
  argTypes: {
    size: {control: 'select', options: ['hero', 'full', 'compact']},
    variant: {control: 'select', options: ['panel', 'wide', 'bare']},
  },
  args: {
    stopId: 'sobre-mi',
    size: 'compact',
    variant: 'panel',
    children: <p className="text-paper">Contenido de la parada</p>,
  },
};

export const Panel = {};

export const Bare = {
  args: {variant: 'bare'},
};
