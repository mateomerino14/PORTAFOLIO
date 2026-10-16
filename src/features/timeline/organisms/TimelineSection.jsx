import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StopIndex from '../../journey/molecules/StopIndex';
import TimelinePanel from '../molecules/TimelinePanel';
import useBranchStops from '../../journey/hooks/useBranchStops';
import {SECTION_IDS} from '../../../constants/navigation';
import {TIMELINE} from '../../../data/timeline';

const styles = {
  intro: 'text-fog',
};

function TimelineSection() {
  const timelineStops = useBranchStops(SECTION_IDS.timeline);
  return (
    <>
      <StopPanel stopId={SECTION_IDS.timeline} size="compact">
        <SectionTitle title="Trayectoria" />
        <p className={styles.intro}>Dónde he trabajado y estudiado, de lo más reciente a lo más antiguo.</p>
        <StopIndex items={timelineStops} />
      </StopPanel>
      {timelineStops.map((stop) => (
        <StopPanel key={stop.id} stopId={stop.id} variant={TIMELINE[stop.itemIndex].photos ? 'wide' : 'panel'}>
          <TimelinePanel entry={TIMELINE[stop.itemIndex]} />
        </StopPanel>
      ))}
    </>
  );
}

export default TimelineSection;
