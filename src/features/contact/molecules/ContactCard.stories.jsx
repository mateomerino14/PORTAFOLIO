import ContactCard from './ContactCard';
import {PROFILE} from '../../../data/profile';

export default {
  title: 'Contact/Molecules/ContactCard',
  component: ContactCard,
  parameters: {
    docs: {
      description: {
        component: 'Tarjeta de contacto con iniciales, ubicación, la hora local actualizada y para qué estoy disponible.',
      },
    },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
  args: {
    name: PROFILE.name,
    role: PROFILE.roles[0],
    initials: PROFILE.initials,
    location: PROFILE.location,
    city: PROFILE.city,
    timeZone: PROFILE.timeZone,
    availability: PROFILE.availability,
  },
};

export const Default = {};
