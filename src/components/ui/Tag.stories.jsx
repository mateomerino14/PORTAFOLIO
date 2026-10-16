import Tag from './Tag';

export default {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Etiqueta de tecnología. Variante "square" en las tarjetas de stack y "pill" en las tarjetas de proyecto.',
      },
    },
  },
  argTypes: {
    variant: {control: 'select', options: ['square', 'pill']},
  },
  args: {
    label: 'React',
    variant: 'square',
  },
};

export const Square = {};

export const Pill = {
  args: {variant: 'pill'},
};
