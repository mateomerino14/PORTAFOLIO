import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StackGroup from '../molecules/StackGroup';
import useTechHighlight from '../hooks/useTechHighlight';
import {SECTION_IDS} from '../../../constants/navigation';
import {STACK_GROUPS} from '../../../data/stack';

const styles = {
  hint: 'mb-2 text-sm text-fog',
  pointerHint: 'hidden md:inline',
  touchHint: 'md:hidden',
};

function StackSection() {
  const {linkedTechnologies, hoveredTech, highlightTech, clearTech} = useTechHighlight();
  return (
    <StopPanel stopId={SECTION_IDS.stack}>
      <SectionTitle title="Stack" />
      <p className={styles.hint}>
        <span className={styles.pointerHint}>Pasa el cursor por</span>
        <span className={styles.touchHint}>Toca</span>
        {' '}una tecnología subrayada para ver en qué proyectos la usé.
      </p>
      {STACK_GROUPS.map((group) => (
        <StackGroup key={group.title} group={group} linkedTechnologies={linkedTechnologies} hoveredTech={hoveredTech} onTechEnter={highlightTech} onTechLeave={clearTech} />
      ))}
    </StopPanel>
  );
}

export default StackSection;
