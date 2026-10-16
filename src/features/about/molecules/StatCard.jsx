import Counter from '../../../components/ui/Counter';
import TiltCard from '../../../components/ui/TiltCard';
import {STAT_ICONS} from '../constants/statIcons';

const styles = {
  tilt: 'h-full rounded-xl',
  card: 'relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl border border-line bg-ink-soft p-4',
  header: 'flex items-start justify-between gap-2',
  value: 'font-display text-2xl font-extrabold text-paper md:text-3xl',
  badge: 'grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent',
  watermark: 'pointer-events-none absolute -right-4 -bottom-4 text-accent/5',
  label: 'relative text-xs leading-snug text-fog',
};

const badgeIconSize = 16;
const watermarkIconSize = 72;

function StatCard({stat}) {
  const Icon = STAT_ICONS[stat.id];
  return (
    <TiltCard className={styles.tilt}>
      <div className={styles.card}>
        <Icon size={watermarkIconSize} className={styles.watermark} aria-hidden="true" />
        <div className={styles.header}>
          <span className={styles.value}>
            <Counter target={stat.value} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
          </span>
          <span className={styles.badge}>
            <Icon size={badgeIconSize} aria-hidden="true" />
          </span>
        </div>
        <span className={styles.label}>{stat.label}</span>
      </div>
    </TiltCard>
  );
}

export default StatCard;
