import Reveal from './Reveal';

export default {
  title: 'UI/Reveal',
  component: Reveal,
  parameters: {
    docs: {
      description: {
        component: 'Muestra su contenido con un desplazamiento vertical y desenfoque cuando entra en pantalla.',
      },
    },
  },
  args: {
    delay: 0,
    offsetY: 28,
    children: <p className="text-lg text-paper">Contenido que aparece al hacer scroll</p>,
  },
};

export const Default = {};

export const Delayed = {
  args: {delay: 0.6},
};
