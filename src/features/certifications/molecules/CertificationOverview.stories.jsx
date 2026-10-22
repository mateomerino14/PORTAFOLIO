import CertificationOverview from './CertificationOverview';

export default {
  title: 'Certifications/Molecules/CertificationOverview',
  component: CertificationOverview,
  parameters: {
    docs: {
      description: {
        component: 'Resumen de todas las certificaciones: total de certificados, horas de formación sin contar dos veces los cursos de un programa mayor, año de inicio y una barra por área con su cantidad de certificados y horas.',
      },
    },
  },
  decorators: [(Story) => <div className="w-[26rem]"><Story /></div>],
};

export const AllAreas = {};
