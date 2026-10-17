import TimelinePanel from './TimelinePanel';
import {TIMELINE} from '../../../data/timeline';

const [medal, freelance, internship, teaching] = TIMELINE;

const wide = (Story) => <div className="w-[60rem] rounded-2xl border border-line bg-ink/80 p-8"><Story /></div>;

export default {
  title: 'Timeline/Molecules/TimelinePanel',
  component: TimelinePanel,
  parameters: {
    docs: {
      description: {
        component: 'Contenido de la parada de una etapa de la trayectoria: tipo, periodo, cargo, lugar, logros y tecnologías. Al costado muestra las fotos de la etapa, sus proyectos o sus materias.',
      },
    },
  },
  decorators: [wide],
  args: {
    entry: internship,
    hasAside: true,
    relatedProjects: [
      {id: 'proyecto-1', label: 'Sistema de Control de Viáticos', meta: 'Pasantía · MAXAM · Web full stack', highlights: ['Extracción automática de datos de comprobantes con IA'], tags: ['React', 'Supabase']},
    ],
  },
};

export const WithProject = {};

export const Freelance = {
  args: {
    entry: freelance,
    relatedProjects: [
      {id: 'proyecto-2', label: 'Sistema de Gestión para Café-Bar', meta: 'Cliente freelance · Escritorio y web', highlights: ['Comandas a cocina y tickets en impresoras térmicas'], tags: ['React', 'PostgreSQL']},
    ],
  },
};

export const WithSubjects = {
  args: {entry: teaching, relatedProjects: []},
};

export const WithPhotos = {
  args: {entry: medal, relatedProjects: []},
};
