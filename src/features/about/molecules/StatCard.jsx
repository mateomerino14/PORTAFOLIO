import Counter from '../../../components/ui/Counter';
import TiltCard from '../../../components/ui/TiltCard';

const styles = {
  tilt: 'h-full rounded-2xl',
  card: 'flex h-full flex-col justify-between rounded-2xl border border-line bg-ink-soft p-5 md:p-6',
  value: 'font-display text-3xl font-extrabold text-paper md:text-4xl',
  label: 'mt-6 text-sm leading-snug text-fog',
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
