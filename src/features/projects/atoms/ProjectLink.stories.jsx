import ProjectLink from './ProjectLink';

export default {
  title: 'Projects/Atoms/ProjectLink',
  component: ProjectLink,
  parameters: {
    docs: {
      description: {
        component: 'Enlace externo de un proyecto. No se muestra si no recibe dirección.',
      },
    },
  },
  args: {
    href: 'https://github.com/mateomerino14',
    label: 'Código',
  },
};

export const Default = {};
