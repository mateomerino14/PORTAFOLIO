import {motion} from 'framer-motion';
import Section from '../../../components/ui/Section';
import SectionTitle from '../../../components/ui/SectionTitle';
import TimelineEntry from '../molecules/TimelineEntry';
import useTimelineProgress from '../hooks/useTimelineProgress';
import {SECTION_IDS} from '../../../constants/navigation';
import {TIMELINE} from '../../../data/timeline';

const styles = {
  track: 'relative pl-8 md:pl-0',
  rail: 'absolute top-0 bottom-0 left-[7px] w-px bg-line md:left-1/2',
  fill: 'absolute top-0 left-[7px] w-px bg-gradient-to-b from-accent to-signal md:left-1/2',
};

function TimelineSection() {
  const {trackRef, fillHeight} = useTimelineProgress();
  return (
    <Section id={SECTION_IDS.timeline}>
      <SectionTitle title="Trayectoria" />
      <div ref={trackRef} className={styles.track}>
        <div className={styles.rail} />
        <motion.div className={styles.fill} style={{height: fillHeight}} />
        {TIMELINE.map((entry, position) => <TimelineEntry key={entry.title} entry={entry} position={position} />)}
      </div>
    </Section>
  );
}

export default TimelineSection;
