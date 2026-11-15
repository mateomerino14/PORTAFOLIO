import {Building2, GraduationCap, Laptop, Presentation, Rocket, Trophy} from 'lucide-react';

export const TIMELINE_TYPE_LABELS = {
  personal: 'Proyectos propios',
  freelance: 'Freelance',
  internship: 'Pasantía',
  work: 'Experiencia',
  education: 'Educación',
  award: 'Reconocimiento',
};

export const TIMELINE_TYPE_ICONS = {
  personal: Rocket,
  freelance: Laptop,
  internship: Building2,
  work: Presentation,
  education: GraduationCap,
  award: Trophy,
};
