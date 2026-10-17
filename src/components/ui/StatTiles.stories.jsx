import StatTiles from './StatTiles';

export default {
  title: 'UI/StatTiles',
  component: StatTiles,
  parameters: {
    docs: {
      description: {
        component: 'Fila de tres cifras con su descripción. Las cifras no se parten en dos líneas y las descripciones se acomodan en pantallas angostas.',
      },
    },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
  args: {
    stats: [
      {value: 7, label: 'Certificados'},
      {value: '330 h', label: 'Formación'},
      {value: '2024', label: 'Periodo'},
    ],
  },
};

export const Default = {};
