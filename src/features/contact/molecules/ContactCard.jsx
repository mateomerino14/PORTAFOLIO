import {Clock, MapPin} from 'lucide-react';
import useLocalTime from '../../../hooks/shared/useLocalTime';
import {publicAsset} from '../../../utils/assets';

const styles = {
  card: 'overflow-hidden rounded-2xl border border-line bg-ink-soft/90 backdrop-blur-md',
  photo: 'aspect-[4/3] w-full object-cover object-[50%_20%]',
  body: 'space-y-4 p-5',
  name: 'font-display text-xl font-extrabold text-paper',
  role: 'mt-0.5 text-sm text-accent',
  facts: 'space-y-2 text-sm text-fog',
  fact: 'flex items-center gap-2',
  factIcon: 'shrink-0 text-signal',
  availabilityTitle: 'mb-2 font-mono text-[11px] tracking-widest text-fog uppercase',
  availability: 'flex flex-wrap gap-2',
  chip: 'inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-paper',
  dot: 'h-1.5 w-1.5 rounded-full bg-signal',
};

const factIconSize = 15;

function ContactCard({name, role, photo, location, city, timeZone, availability}) {
  const localTime = useLocalTime(timeZone);
  return (
    <aside className={styles.card}>
      <img src={publicAsset(photo)} alt={name} loading="lazy" className={styles.photo} />
      <div className={styles.body}>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
        <ul className={styles.facts}>
          <li className={styles.fact}>
            <MapPin size={factIconSize} className={styles.factIcon} aria-hidden="true" />
            {location}
          </li>
          <li className={styles.fact}>
            <Clock size={factIconSize} className={styles.factIcon} aria-hidden="true" />
            Ahora son las {localTime} en {city}
          </li>
        </ul>
        <div>
          <p className={styles.availabilityTitle}>Disponible para</p>
          <ul className={styles.availability}>
            {availability.map((item) => (
              <li key={item} className={styles.chip}>
                <span className={styles.dot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default ContactCard;
