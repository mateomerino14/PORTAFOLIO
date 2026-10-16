import Counter from './Counter';

export default {
  title: 'UI/Counter',
  component: Counter,
  parameters: {
    docs: {
      description: {
        component: 'Número que cuenta desde cero hasta el valor indicado la primera vez que entra en pantalla.',
      },
    },
  },
  args: {
    target: 84.68,
    decimals: 2,
    prefix: '',
    suffix: '',
  },
};

export const Decimal = {};

export const WithPrefix = {
  args: {target: 3, decimals: 0, prefix: 'Top '},
};

export const WithSuffix = {
  args: {target: 500, decimals: 0, suffix: '+'},
};
