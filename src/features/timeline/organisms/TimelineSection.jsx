import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StopIndex from '../../journey/molecules/StopIndex';
import TimelinePanel from '../molecules/TimelinePanel';
import TimelineOverview from '../molecules/TimelineOverview';
import useTimelineOverview from '../hooks/useTimelineOverview';
import useTimelineIndex from '../hooks/useTimelineIndex';
import {SECTION_IDS} from '../../../constants/navigation';
import {TIMELINE} from '../../../data/timeline';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:gap-8',
  intro: 'text-fog',
};

function TimelineSection() {
  const timelineStops = useTimelineIndex();
  const overview = useTimelineOverview();
  return (
    <>
      <StopPanel stopId={SECTION_IDS.timeline} size="compact" variant="wide">
        <div className={styles.layout}>
          <div>
            <SectionTitle title="Trayectoria" />
            <p className={styles.intro}>Dónde he trabajado y estudiado, de lo más reciente a lo más antiguo.</p>
            <StopIndex items={timelineStops} />
          </div>
          <TimelineOverview overview={overview} />
        </div>
      </StopPanel>
      {timelineStops.map((stop) => (
        <StopPanel key={stop.id} stopId={stop.id} variant={stop.isWide ? 'wide' : 'panel'}>
          <TimelinePanel entry={TIMELINE[stop.itemIndex]} relatedProjects={stop.relatedProjects} hasAside={stop.hasAside} />
        </StopPanel>
      ))}
    </>
  );
}

export default TimelineSection;
