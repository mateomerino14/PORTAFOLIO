import EmailMenu from './EmailMenu';
import {EMAIL_PROVIDERS, EMAIL_URL} from '../constants/contactLinks';
import {PROFILE} from '../../../data/profile';

export default {
  title: 'Contact/Molecules/EmailMenu',
  component: EmailMenu,
  parameters: {
    docs: {
      description: {
        component: 'Botón de correo con un menú para escribir desde Gmail, Outlook o la app de correo del equipo, o copiar la dirección. Funciona aunque el equipo no tenga una app de correo configurada.',
      },
    },
  },
  decorators: [(Story) => <div className="pt-60"><Story /></div>],
  args: {
    email: PROFILE.email,
    providers: EMAIL_PROVIDERS,
    fallbackUrl: EMAIL_URL,
  },
};

export const Default = {};
