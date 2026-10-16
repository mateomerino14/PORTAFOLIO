import CopyEmailButton from './CopyEmailButton';

export default {
  title: 'Contact/Molecules/CopyEmailButton',
  component: CopyEmailButton,
  parameters: {
    docs: {
      description: {
        component: 'Botón que copia el correo al portapapeles y confirma la acción; si el navegador no lo permite, abre el cliente de correo.',
      },
    },
  },
  args: {
    email: 'mateomerino988@gmail.com',
    fallbackUrl: 'mailto:mateomerino988@gmail.com',
  },
};

export const Default = {};
