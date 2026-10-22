import CertificationSummary from './CertificationSummary';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const languages = CERTIFICATION_GROUPS.find((group) => group.group === 'Idiomas');
const dataAndAi = CERTIFICATION_GROUPS.find((group) => group.group === 'Datos e IA');

export default {
  title: 'Certifications/Molecules/CertificationSummary',
  component: CertificationSummary,
  parameters: {
    docs: {
      description: {
        component: 'Resumen de un grupo de certificaciones que no tiene certificados escaneados: tres cifras y los temas del grupo con su ícono. Las horas de los cursos que forman parte de un programa mayor no se suman dos veces.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[26rem]"><Story /></div>],
  args: {group: languages},
};

export const FewTopics = {};

export const ManyTopics = {
  args: {group: dataAndAi},
};
