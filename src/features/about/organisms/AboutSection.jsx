import Section from '../../../components/ui/Section';
import SectionTitle from '../../../components/ui/SectionTitle';
import Reveal from '../../../components/ui/Reveal';
import StatCard from '../molecules/StatCard';
import LanguageBar from '../molecules/LanguageBar';
import {SECTION_IDS} from '../../../constants/navigation';
import {LANGUAGES, PROFILE, STATS} from '../../../data/profile';

const styles = {
  layout: 'grid gap-14 md:grid-cols-[1.2fr_1fr]',
  story: 'space-y-6 text-lg leading-relaxed text-fog',
  lead: 'text-paper',
  languages: 'flex flex-wrap gap-6 pt-4',
  stats: 'grid grid-cols-2 gap-3',
};

const paragraphDelay = 0.1;
const statDelay = 0.08;

function AboutSection() {
  return (
    <Section id={SECTION_IDS.about}>
      <SectionTitle title="Sobre mí" />
      <div className={styles.layout}>
        <div className={styles.story}>
          {PROFILE.about.map((paragraph, position) => (
            <Reveal key={position} delay={position * paragraphDelay}>
              <p className={position === 0 ? styles.lead : ''}>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={PROFILE.about.length * paragraphDelay}>
            <div className={styles.languages}>
              {LANGUAGES.map((language) => <LanguageBar key={language.name} language={language} />)}
            </div>
          </Reveal>
        </div>
        <div className={styles.stats}>
          {STATS.map((stat, position) => (
            <Reveal key={stat.label} delay={position * statDelay}>
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
