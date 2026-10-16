import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StatCard from '../molecules/StatCard';
import LanguageBar from '../molecules/LanguageBar';
import {SECTION_IDS} from '../../../constants/navigation';
import {LANGUAGES, PROFILE, STATS} from '../../../data/profile';

const styles = {
  story: 'space-y-4 leading-relaxed text-fog',
  lead: 'text-paper',
  stats: 'mt-6 grid grid-cols-2 gap-3',
  languages: 'mt-6 flex flex-wrap gap-6',
};

function AboutSection() {
  return (
    <StopPanel stopId={SECTION_IDS.about}>
      <SectionTitle title="Sobre mí" />
      <div className={styles.story}>
        {PROFILE.about.map((paragraph, position) => (
          <p key={position} className={position === 0 ? styles.lead : ''}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.stats}>
        {STATS.map((stat) => <StatCard key={stat.label} stat={stat} />)}
      </div>
      <div className={styles.languages}>
        {LANGUAGES.map((language) => <LanguageBar key={language.name} language={language} />)}
      </div>
    </StopPanel>
  );
}

export default AboutSection;
