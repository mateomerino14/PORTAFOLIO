import CertificationItem from './CertificationItem';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

const [professional, diplomas] = CERTIFICATION_GROUPS;

export default {
  title: 'Certifications/Molecules/CertificationItem',
  component: CertificationItem,
  parameters: {
    docs: {
      description: {
        component: 'Fila de una certificación con su emisor, fecha y carga horaria cuando corresponde.',
      },
    },
  },
  decorators: [(Story) => <ul className="w-[28rem]"><Story /></ul>],
  args: {
    certification: diplomas.items[0],
  },
};

export const WithHours = {};

export const WithoutIssuer = {
  args: {certification: professional.items[0]},
};
