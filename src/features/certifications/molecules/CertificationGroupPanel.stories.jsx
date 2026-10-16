import CertificationGroupPanel from './CertificationGroupPanel';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

export default {
  title: 'Certifications/Molecules/CertificationGroupPanel',
  component: CertificationGroupPanel,
  parameters: {
    docs: {
      description: {
        component: 'Contenido de la parada de un grupo de certificaciones: su lista completa y, al costado, un resumen visual del grupo.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[60rem] rounded-2xl border border-line bg-ink/80 p-8"><Story /></div>],
  args: {
    group: CERTIFICATION_GROUPS[1],
  },
};

export const Diplomas = {};

export const Courses = {
  args: {group: CERTIFICATION_GROUPS[2]},
};
