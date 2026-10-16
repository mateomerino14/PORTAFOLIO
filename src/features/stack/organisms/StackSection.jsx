import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StackGroup from '../molecules/StackGroup';
import {SECTION_IDS} from '../../../constants/navigation';
import {STACK_GROUPS} from '../../../data/stack';

function StackSection() {
  return (
    <StopPanel stopId={SECTION_IDS.stack}>
      <SectionTitle title="Stack" />
      {STACK_GROUPS.map((group) => <StackGroup key={group.title} group={group} />)}
    </StopPanel>
  );
}

export default StackSection;
