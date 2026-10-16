import TechMarquee from './TechMarquee';

export default {
  title: 'Stack/Molecules/TechMarquee',
  component: TechMarquee,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Cinta infinita con las tecnologías, alternando texto sólido y con contorno.',
      },
    },
  },
  args: {
    items: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Power BI'],
  },
};

export const Default = {};
