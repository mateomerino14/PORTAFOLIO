import LanguageBar from './LanguageBar';
import {LANGUAGES} from '../../../data/profile';

export default {
  title: 'About/Molecules/LanguageBar',
  component: LanguageBar,
  parameters: {
    docs: {
      description: {
        component: 'Barra de nivel de un idioma que se llena al entrar en pantalla.',
      },
    },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
  args: {
    language: LANGUAGES[1],
  },
};

export const Default = {};

export const Native = {
  args: {language: LANGUAGES[0]},
};
