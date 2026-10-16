import Counter from '../../../components/ui/Counter';
import TiltCard from '../../../components/ui/TiltCard';

const styles = {
  tilt: 'h-full rounded-xl',
  card: 'flex h-full flex-col justify-between rounded-xl border border-line bg-ink-soft p-4',
  value: 'font-display text-2xl font-extrabold text-paper md:text-3xl',
  label: 'mt-3 text-xs leading-snug text-fog',
};

function StatCard({stat}) {
  return (
    <TiltCard className={styles.tilt}>
      <div className={styles.card}>
        <span className={styles.value}>
          <Counter target={stat.value} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
        </span>
        <span className={styles.label}>{stat.label}</span>
      </div>
    </TiltCard>
  );
}

export default StatCard;
