import {PROFILE} from '../../../data/profile';

const digitsOnly = (value) => value.replace(/\D/g, '');

export const EMAIL_URL = `mailto:${PROFILE.email}`;

const newTab = {target: '_blank', rel: 'noreferrer'};
const sameTab = {target: '_self', rel: undefined};

export const CONTACT_LINKS = [
  {label: 'GitHub', href: PROFILE.github, ...newTab},
  {label: 'LinkedIn', href: PROFILE.linkedin, ...newTab},
  {label: 'Email', href: EMAIL_URL, ...sameTab},
  {label: 'WhatsApp', href: `https://wa.me/${digitsOnly(PROFILE.phone)}`, ...newTab},
].filter((link) => link.href);
