import TimelineOverview from './TimelineOverview';

export default {
  title: 'Timeline/Molecules/TimelineOverview',
  component: TimelineOverview,
  parameters: {
    docs: {
      description: {
        component: 'Resumen de la trayectoria junto al índice: la foto del reconocimiento más reciente y tres cifras de la trayectoria.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[26rem]"><Story /></div>],
  args: {
    overview: {
      stages: 6,
      since: 2023,
      awards: 2,
      featured: {
        title: 'Medalla de Oro · Estudiante Destacado',
        period: 'Sep 2026',
        image: {src: 'awards/medalla-oro.webp', caption: 'Con la Medalla de Oro y el reconocimiento de la facultad'},
      },
    },
  },
};

export const Default = {};
