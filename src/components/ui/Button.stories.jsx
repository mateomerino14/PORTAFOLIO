import {ArrowRight} from 'lucide-react';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Botón de acción base. Variante "primary" para la acción principal (fondo lima) y "secondary" para acciones neutras (borde y fondo translúcido).',
      },
    },
  },
  argTypes: {
    variant: {control: 'select', options: ['primary', 'secondary']},
  },
  args: {
    text: 'Ver proyectos',
    variant: 'primary',
  },
};

export const Primary = {
  args: {variant: 'primary', icon: ArrowRight},
};

export const Secondary = {
  args: {variant: 'secondary', text: 'Hablemos'},
};
