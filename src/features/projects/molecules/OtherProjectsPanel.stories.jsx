import OtherProjectsPanel from './OtherProjectsPanel';

export default {
  title: 'Projects/Molecules/OtherProjectsPanel',
  component: OtherProjectsPanel,
  parameters: {
    docs: {
      description: {
        component: 'Lista compacta de los proyectos que no son destacados. Cada fila abre el detalle completo del proyecto en una ventana.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[64rem] rounded-2xl border border-line bg-ink/80 p-8"><Story /></div>],
};

export const Default = {};
