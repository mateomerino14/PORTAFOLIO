import {motion} from 'framer-motion';
import Reveal from '../../../components/ui/Reveal';
import {TIMELINE_TYPE_LABELS} from '../constants/timelineTypes';

const styles = {
  row: 'relative mb-14 md:grid md:grid-cols-2 md:gap-16',
  dot: 'absolute top-2 -left-8 h-[15px] w-[15px] rounded-full border-2 border-accent bg-ink md:left-1/2 md:-translate-x-1/2',
  leftColumn: 'md:text-right',
  rightColumn: 'md:col-start-2',
  meta: 'font-mono text-xs text-accent',
  title: 'mt-2 font-display text-2xl font-extrabold',
  place: 'text-fog',
  points: 'mt-4 space-y-1.5 text-sm text-fog',
};

const dotViewport = {once: true, margin: '-40%'};

function TimelineEntry({entry, position}) {
  const isLeft = position % 2 === 0;
  return (
    <div className={styles.row}>
      <motion.span className={styles.dot} initial={{scale: 0}} whileInView={{scale: 1}} viewport={dotViewport} />
      <div className={isLeft ? styles.leftColumn : styles.rightColumn}>
        <Reveal>
          <p className={styles.meta}>{entry.period} · {TIMELINE_TYPE_LABELS[entry.type]}</p>
          <h3 className={styles.title}>{entry.title}</h3>
          <p className={styles.place}>{entry.place}</p>
          <ul className={styles.points}>
            {entry.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

export default TimelineEntry;
