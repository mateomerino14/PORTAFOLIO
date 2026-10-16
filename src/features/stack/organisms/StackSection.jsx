import Section from '../../../components/ui/Section';
import SectionTitle from '../../../components/ui/SectionTitle';
import Reveal from '../../../components/ui/Reveal';
import StackCard from '../molecules/StackCard';
import {SECTION_IDS} from '../../../constants/navigation';
import {STACK_GROUPS} from '../../../data/stack';

const styles = {
  section: 'overflow-hidden',
  grid: 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
};

const columns = 3;
const cardDelay = 0.08;

function StackSection() {
  return (
    <Section id={SECTION_IDS.stack} className={styles.section}>
      <SectionTitle title="Stack" />
      <div className={styles.grid}>
        {STACK_GROUPS.map((group, position) => (
          <Reveal key={group.title} delay={(position % columns) * cardDelay}>
            <StackCard group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default StackSection;
