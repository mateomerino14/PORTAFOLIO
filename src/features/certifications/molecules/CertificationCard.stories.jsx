import CertificationCard from './CertificationCard';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const [professional, diplomas] = CERTIFICATION_GROUPS;

export default {
  title: 'Certifications/Molecules/CertificationCard',
  component: CertificationCard,
  parameters: {
    docs: {
      description: {
        component: 'Tarjeta de una certificación con su emisor, fecha y carga horaria cuando corresponde.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
  args: {
    certification: diplomas.items[0],
  },
};

export const WithHours = {};

export const WithoutIssuer = {
  args: {certification: professional.items[0]},
};
