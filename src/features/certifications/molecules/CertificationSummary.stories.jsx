import CertificationSummary from './CertificationSummary';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const [professional, , courses] = CERTIFICATION_GROUPS;

export default {
  title: 'Certifications/Molecules/CertificationSummary',
  component: CertificationSummary,
  parameters: {
    docs: {
      description: {
        component: 'Resumen de un grupo de certificaciones. En un grupo muestra sus certificados escaneados y tres cifras; si no hay certificados, los temas con su ícono. En modo `overview` resume todas las certificaciones con sus temas y quién las emitió.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[26rem]"><Story /></div>],
  args: {group: courses},
};

export const WithCertificates = {};

export const WithoutCertificates = {
  args: {group: professional},
};

export const Overview = {
  args: {group: {group: 'Todas', items: CERTIFICATION_GROUPS.flatMap((group) => group.items)}, overview: true},
};
