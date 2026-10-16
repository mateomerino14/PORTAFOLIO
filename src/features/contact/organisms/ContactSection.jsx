import {ArrowUpRight} from 'lucide-react';
import Section from '../../../components/ui/Section';
import Reveal from '../../../components/ui/Reveal';
import CopyEmailButton from '../molecules/CopyEmailButton';
import {CONTACT_LINKS, EMAIL_URL} from '../constants/contactLinks';
import {SECTION_IDS} from '../../../constants/navigation';
import {PROFILE} from '../../../data/profile';

const styles = {
  section: 'overflow-hidden',
  container: 'text-center',
  glow: 'pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-signal/25 blur-[140px]',
  title: 'font-display text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.9] font-extrabold tracking-tight',
  outlined: 'text-outline',
  accent: 'text-accent',
  text: 'mx-auto mt-8 max-w-lg text-fog',
  copy: 'mt-10',
  links: 'mt-14 flex flex-wrap justify-center gap-3',
  link: 'inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm transition-all hover:-translate-y-1 hover:border-paper',
};

const iconSize = 14;
const revealStepSeconds = 0.1;

function ContactSection() {
  return (
    <Section id={SECTION_IDS.contact} className={styles.section} containerClassName={styles.container} after={<div className={styles.glow} />}>
      <Reveal delay={revealStepSeconds}>
        <h2 className={styles.title}>
          ¿Construimos<br />
          <span className={styles.outlined}>algo</span> <span className={styles.accent}>juntos?</span>
        </h2>
      </Reveal>
      <Reveal delay={revealStepSeconds * 2}>
        <p className={styles.text}>Busco prácticas, proyectos freelance y equipos donde aprender. Escríbeme y te respondo pronto.</p>
      </Reveal>
      <Reveal delay={revealStepSeconds * 3} className={styles.copy}>
        <CopyEmailButton email={PROFILE.email} fallbackUrl={EMAIL_URL} />
      </Reveal>
      <Reveal delay={revealStepSeconds * 4}>
        <div className={styles.links}>
          {CONTACT_LINKS.map((link) => (
            <a key={link.label} href={link.href} target={link.target} rel={link.rel} className={styles.link}>
              {link.label}
              <ArrowUpRight size={iconSize} />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export default ContactSection;
