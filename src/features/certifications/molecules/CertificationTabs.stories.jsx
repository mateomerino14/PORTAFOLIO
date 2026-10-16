import {fn} from 'storybook/test';
import CertificationTabs from './CertificationTabs';
import {CERTIFICATION_GROUPS} from '../../../data/certifications';

export default {
  title: 'Certifications/Molecules/CertificationTabs',
  component: CertificationTabs,
  parameters: {
    docs: {
      description: {
        component: 'Pestañas para cambiar el grupo de certificaciones visible, con el total de cada grupo.',
      },
    },
  },
  argTypes: {
    activeIndex: {control: {type: 'range', min: 0, max: CERTIFICATION_GROUPS.length - 1, step: 1}},
  },
  args: {
    groups: CERTIFICATION_GROUPS,
    activeIndex: 0,
    onSelect: fn(),
  },
};

export const Default = {};

export const SecondTab = {
  args: {activeIndex: 1},
};
