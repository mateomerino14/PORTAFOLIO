import {TIMELINE_TYPE_LABELS} from '../constants/timelineTypes';

const styles = {
  meta: 'mb-3 font-mono text-xs text-fog',
  type: 'text-accent',
  title: 'font-display text-2xl leading-tight font-extrabold md:text-3xl',
  place: 'mt-1 text-fog',
  points: 'mt-4 list-disc space-y-1.5 pl-5 text-sm text-fog marker:text-signal',
};

const metaSeparator = ' · ';

function TimelinePanel({entry}) {
  return (
    <article>
      <p className={styles.meta}>
        <span className={styles.type}>{TIMELINE_TYPE_LABELS[entry.type]}</span>
        {metaSeparator}
        {entry.period}
      </p>
      <h3 className={styles.title}>{entry.title}</h3>
      <p className={styles.place}>{entry.place}</p>
      <ul className={styles.points}>
        {entry.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </article>
  );
}

export default TimelinePanel;
