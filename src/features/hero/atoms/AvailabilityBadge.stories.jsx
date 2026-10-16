import AvailabilityBadge from './AvailabilityBadge';

export default {
  title: 'Hero/Atoms/AvailabilityBadge',
  component: AvailabilityBadge,
  parameters: {
    docs: {
      description: {
        component: 'Insignia con indicador pulsante que comunica la disponibilidad actual.',
      },
    },
  },
  args: {
    text: 'Disponible para prácticas y proyectos · Cochabamba, Bolivia',
  },
};

export const Default = {};
