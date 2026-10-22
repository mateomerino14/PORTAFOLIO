import {BadgeCheck, GraduationCap} from 'lucide-react';
import StopIndex from './StopIndex';

export default {
  title: 'Journey/Molecules/StopIndex',
  component: StopIndex,
  parameters: {
    docs: {
      description: {
        component: 'Índice de los subnodos de una parada principal. Cada fila muestra una miniatura o un ícono, su nombre y un dato breve, y lleva directamente a su parada.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
  args: {
    items: [
      {id: 'proyecto-1', label: 'Sistema de Control de Viáticos', meta: 'Pasantía · MAXAM · Web full stack', thumbnail: 'projects/viaticos/mis-viajes.webp'},
      {id: 'proyecto-2', label: 'Sistema Cafebar · Web y escritorio', meta: 'Cliente freelance · Web y escritorio', thumbnail: 'projects/cafe-bar/mesas.webp'},
      {id: 'proyecto-3', label: 'Brasa Brava', meta: 'Restaurante · Web y escritorio', thumbnail: 'projects/brasa-brava/inicio.webp'},
    ],
  },
};

export const WithThumbnails = {};

export const WithIcons = {
  args: {
    items: [
      {id: 'certificados-1', label: 'Profesionales', meta: '6 certificaciones', icon: BadgeCheck},
      {id: 'certificados-2', label: 'Diplomados', meta: '2 certificaciones', icon: GraduationCap},
    ],
  },
};

export const TwoColumns = {
  args: {columns: 2},
  decorators: [(Story) => <div className="w-[56rem]"><Story /></div>],
};
