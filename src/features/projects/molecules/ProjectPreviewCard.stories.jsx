import ProjectPreviewCard from './ProjectPreviewCard';

export default {
  title: 'Projects/Molecules/ProjectPreviewCard',
  component: ProjectPreviewCard,
  parameters: {
    docs: {
      description: {
        component: 'Vista previa de un proyecto con sus logros y tecnologías. Al tocarla lleva a la parada del proyecto en el recorrido.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
  args: {
    project: {
      id: 'proyecto-1',
      label: 'Sistema de Control de Viáticos',
      meta: 'Pasantía · MAXAM · Web full stack',
      highlights: ['Extracción automática de datos de comprobantes con IA', 'Generación de memorándums, planillas y recibos en PDF y Excel'],
      tags: ['React', 'Node.js', 'Express', 'Supabase'],
    },
  },
};

export const Default = {};
