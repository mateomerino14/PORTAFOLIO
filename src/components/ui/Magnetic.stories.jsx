import Magnetic from './Magnetic';
import Button from './Button';

export default {
  title: 'UI/Magnetic',
  component: Magnetic,
  parameters: {
    docs: {
      description: {
        component: 'Envoltorio que desplaza a su contenido hacia el cursor mientras este pasa por encima.',
      },
    },
  },
  argTypes: {
    strength: {control: {type: 'range', min: 0, max: 1, step: 0.05}},
  },
  args: {
    strength: 0.35,
    children: <Button text="Pasa el cursor" />,
  },
};

export const Default = {};

export const Strong = {
  args: {strength: 0.8},
};
