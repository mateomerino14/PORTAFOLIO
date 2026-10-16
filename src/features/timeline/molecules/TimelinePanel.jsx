import {MapPin} from 'lucide-react';
import {TIMELINE_TYPE_ICONS, TIMELINE_TYPE_LABELS} from '../constants/timelineTypes';

const styles = {
  header: 'mb-4 flex items-center gap-3',
  badge: 'grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent',
  meta: 'font-mono text-xs text-fog',
  type: 'block text-accent',
  title: 'font-display text-2xl leading-tight font-extrabold md:text-3xl',
  place: 'mt-1 flex items-center gap-1.5 text-fog',
  points: 'mt-4 list-disc space-y-1.5 pl-5 text-sm text-fog marker:text-signal',
};

const badgeIconSize = 20;
const placeIconSize = 14;

function TimelinePanel({entry}) {
  const Icon = TIMELINE_TYPE_ICONS[entry.type];
  return (
    <article>
      <div className={styles.header}>
        <span className={styles.badge}>
          <Icon size={badgeIconSize} aria-hidden="true" />
        </span>
        <p className={styles.meta}>
          <span className={styles.type}>{TIMELINE_TYPE_LABELS[entry.type]}</span>
          {entry.period}
        </p>
      </div>
      <h3 className={styles.title}>{entry.title}</h3>
      <p className={styles.place}>
        <MapPin size={placeIconSize} aria-hidden="true" />
        {entry.place}
      </p>
      <ul className={styles.points}>
        {entry.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </article>
  );
}

export default TimelinePanel;
