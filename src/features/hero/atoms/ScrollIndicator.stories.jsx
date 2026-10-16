import {fn} from 'storybook/test';
import ScrollIndicator from './ScrollIndicator';

export default {
  title: 'Hero/Atoms/ScrollIndicator',
  component: ScrollIndicator,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Indicador animado al pie de la portada que lleva a la siguiente sección.',
      },
    },
  },
  decorators: [(Story) => <div className="relative h-48"><Story /></div>],
  args: {
    onClick: fn(),
  },
};

export const Default = {};
