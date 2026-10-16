import {Award, Briefcase, FolderGit2, Layers, Mail, UserRound} from 'lucide-react';

export const SECTION_IDS = {
  hero: 'inicio',
  about: 'sobre-mi',
  stack: 'stack',
  projects: 'proyectos',
  timeline: 'trayectoria',
  certifications: 'certificaciones',
  contact: 'contacto',
};

export const NAV_ITEMS = [
  {id: SECTION_IDS.about, label: 'Sobre mí', icon: UserRound},
  {id: SECTION_IDS.stack, label: 'Stack', icon: Layers},
  {id: SECTION_IDS.projects, label: 'Proyectos', icon: FolderGit2},
  {id: SECTION_IDS.timeline, label: 'Trayectoria', icon: Briefcase},
  {id: SECTION_IDS.certifications, label: 'Certificaciones', icon: Award},
  {id: SECTION_IDS.contact, label: 'Contacto', icon: Mail},
];
