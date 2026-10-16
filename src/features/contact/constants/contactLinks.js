import {PROFILE} from '../../../data/profile';

const digitsOnly = (value) => value.replace(/\D/g, '');

export const EMAIL_URL = `mailto:${PROFILE.email}`;

export const CONTACT_LINKS = [
  {label: 'GitHub', href: PROFILE.github},
  {label: 'LinkedIn', href: PROFILE.linkedin},
  {label: 'Email', href: EMAIL_URL},
  {label: 'WhatsApp', href: `https://wa.me/${digitsOnly(PROFILE.phone)}`},
].filter((link) => link.href);
