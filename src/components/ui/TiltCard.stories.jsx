import TiltCard from './TiltCard';

export default {
  title: 'UI/TiltCard',
  component: TiltCard,
  parameters: {
    docs: {
      description: {
        component: 'Tarjeta que se inclina en 3D siguiendo al cursor y muestra un brillo en el punto donde se encuentra.',
      },
    },
  },
  args: {
    className: 'rounded-2xl',
    children: (
      <div className="w-72 rounded-2xl border border-line bg-ink-soft p-6 text-paper">
        Pasa el cursor sobre la tarjeta
      </div>
    ),
  },
};

export const Default = {};
