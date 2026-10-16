import StopIndex from './StopIndex';

export default {
  title: 'Journey/Molecules/StopIndex',
  component: StopIndex,
  parameters: {
    docs: {
      description: {
        component: 'Índice de los subnodos de una parada principal. Cada fila lleva directamente a su parada.',
      },
    },
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
  args: {
    items: [
      {id: 'proyecto-1', label: 'Sistema de Control de Viáticos'},
      {id: 'proyecto-2', label: 'Sistema de Gestión para Café-Bar'},
      {id: 'proyecto-3', label: 'Brasa Brava'},
    ],
  },
};

export const Default = {};
