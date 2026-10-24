import {ArrowUpRight} from 'lucide-react';
import StopPanel from '../../journey/molecules/StopPanel';
import CopyEmailButton from '../molecules/CopyEmailButton';
import ContactCard from '../molecules/ContactCard';
import {CONTACT_LINKS, EMAIL_URL} from '../constants/contactLinks';
import {SECTION_IDS} from '../../../constants/navigation';
import {PROFILE} from '../../../data/profile';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center md:gap-10',
  title: 'font-display text-[clamp(2.6rem,6vw,4.75rem)] leading-[0.92] font-extrabold tracking-tight',
  outlined: 'text-outline',
  accent: 'text-accent',
  text: 'mt-6 max-w-lg text-fog',
  copy: 'mt-8',
  links: 'mt-8 flex flex-wrap gap-3',
  link: 'inline-flex items-center gap-1.5 rounded-full border border-line bg-ink/60 px-5 py-2.5 text-sm backdrop-blur transition-colors hover:border-paper',
};

const iconSize = 14;

function ContactSection() {
  return (
    <StopPanel stopId={SECTION_IDS.contact} variant="bareWide">
      <div className={styles.layout}>
        <div>
          <h2 className={styles.title}>
            ¿Construimos<br />
            <span className={styles.outlined}>algo</span> <span className={styles.accent}>juntos?</span>
          </h2>
          <p className={styles.text}>Estoy buscando prácticas, proyectos freelance y equipos donde aprender. Escríbeme y te respondo pronto.</p>
          <div className={styles.copy}>
            <CopyEmailButton email={PROFILE.email} fallbackUrl={EMAIL_URL} />
          </div>
          <div className={styles.links}>
            {CONTACT_LINKS.map((link) => (
              <a key={link.label} href={link.href} target={link.target} rel={link.rel} className={styles.link}>
                {link.label}
                <ArrowUpRight size={iconSize} />
              </a>
            ))}
          </div>
        </div>
        <ContactCard name={PROFILE.name} role={PROFILE.roles[0]} photo={PROFILE.photo} location={PROFILE.location} city={PROFILE.city} timeZone={PROFILE.timeZone} availability={PROFILE.availability} />
      </div>
    </StopPanel>
  );
}

export default ContactSection;
