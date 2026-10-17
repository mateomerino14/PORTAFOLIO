import TimelineOverview from './TimelineOverview';

export default {
  title: 'Timeline/Molecules/TimelineOverview',
  component: TimelineOverview,
  parameters: {
    docs: {
      description: {
        component: 'Resumen de la trayectoria junto al índice: una línea de tiempo con la duración de cada etapa, los reconocimientos como hitos y tres cifras.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[26rem]"><Story /></div>],
  args: {
    overview: {
      stages: 4,
      since: 2023,
      awards: 1,
      years: [{year: 2023, offset: 0}, {year: 2024, offset: 25}, {year: 2025, offset: 50}, {year: 2026, offset: 75}, {year: 2027, offset: 100}],
      rows: [
        {title: 'Licenciatura en Informática', type: 'education', isPoint: false, left: 0, width: 100},
        {title: 'Asistente de Cátedra', type: 'work', isPoint: false, left: 25, width: 50},
        {title: 'Desarrollador Freelance', type: 'freelance', isPoint: false, left: 50, width: 45},
        {title: 'Medalla de Oro', type: 'award', isPoint: true, left: 91, width: 0},
      ],
    },
  },
};

export const Default = {};
