import ProjectPreviewCard from './ProjectPreviewCard';

export default {
  title: 'Projects/Molecules/ProjectPreviewCard',
  component: ProjectPreviewCard,
  parameters: {
    docs: {
      description: {
        component: 'Vista previa de un proyecto con su captura principal. Al tocarla lleva a la parada del proyecto en el recorrido.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
  args: {
    project: {
      id: 'proyecto-1',
      label: 'Sistema de Control de Viáticos',
      meta: 'Pasantía · MAXAM · Web full stack',
      thumbnail: 'projects/viaticos/inicio-sesion.webp',
    },
  },
};

export const Default = {};
