import TechIcon from './TechIcon';

export default {
  title: 'UI/TechIcon',
  component: TechIcon,
  parameters: {
    docs: {
      description: {
        component: 'Logo de una tecnología con su color de marca. Si el color no se distingue sobre el fondo oscuro se usa el blanco de la paleta, y si la tecnología no tiene logo se muestra un ícono genérico.',
      },
    },
  },
  argTypes: {
    size: {control: {type: 'range', min: 12, max: 48, step: 2}},
  },
  args: {
    name: 'React',
    size: 32,
  },
};

export const Brand = {};

export const DarkBrand = {
  args: {name: 'Express'},
};

export const Fallback = {
  args: {name: 'Power BI'},
};
