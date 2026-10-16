import {PROFILE} from '../../../data/profile';

const digitsOnly = (value) => value.replace(/\D/g, '');

export const EMAIL_URL = `mailto:${PROFILE.email}`;

const encodedEmail = encodeURIComponent(PROFILE.email);

export const EMAIL_PROVIDERS = [
  {label: 'Abrir en Gmail', href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}`, isExternal: true},
  {label: 'Abrir en Outlook', href: `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedEmail}`, isExternal: true},
  {label: 'Abrir app de correo', href: EMAIL_URL, isExternal: false},
];

const newTab = {target: '_blank', rel: 'noreferrer'};

export const CONTACT_LINKS = [
  {label: 'GitHub', href: PROFILE.github, ...newTab},
  {label: 'LinkedIn', href: PROFILE.linkedin, ...newTab},
  {label: 'WhatsApp', href: `https://wa.me/${digitsOnly(PROFILE.phone)}`, ...newTab},
].filter((link) => link.href);
