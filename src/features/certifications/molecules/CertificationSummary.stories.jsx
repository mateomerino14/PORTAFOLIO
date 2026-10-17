import CertificationSummary from './CertificationSummary';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const [professional, diplomas, courses] = CERTIFICATION_GROUPS;

export default {
  title: 'Certifications/Molecules/CertificationSummary',
  component: CertificationSummary,
  parameters: {
    docs: {
      description: {
        component: 'Resumen visual de un grupo de certificaciones: cantidad, horas y periodo, los temas con su ícono, las horas de cada certificado y quién los emitió. En modo compacto muestra los temas como etiquetas y omite las horas por certificado.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[26rem]"><Story /></div>],
  args: {group: courses},
};

export const Courses = {};

export const Diplomas = {
  args: {group: diplomas},
};

export const WithoutHours = {
  args: {group: professional},
};

export const Compact = {
  args: {group: {group: 'Todas', items: CERTIFICATION_GROUPS.flatMap((group) => group.items)}, compact: true},
};
