import CertificationSummary from './CertificationSummary';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const courses = CERTIFICATION_GROUPS.find((group) => group.group === 'Datos e IA');
const [professional] = CERTIFICATION_GROUPS;
const withoutImages = {group: professional.group, items: professional.items.map((item) => ({...item, image: undefined}))};

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
  args: {group: withoutImages},
};

export const Overview = {
  args: {group: {group: 'Todas', items: CERTIFICATION_GROUPS.flatMap((group) => group.items)}, overview: true},
};
