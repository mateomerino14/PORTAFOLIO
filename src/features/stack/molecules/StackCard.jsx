import TiltCard from '../../../components/ui/TiltCard';
import TechList from '../../../components/ui/TechList';
import {STACK_ICONS} from '../constants/stackIcons';

const styles = {
  tilt: 'h-full rounded-2xl',
  card: 'h-full rounded-2xl border border-line bg-ink-soft p-6 transition-colors duration-500 group-hover:border-accent/40',
  header: 'mb-6 flex items-center justify-between',
  title: 'font-display text-xl font-semibold',
  icon: 'grid h-10 w-10 place-items-center rounded-xl bg-ink-raised text-accent transition-transform duration-500 group-hover:rotate-12',
};

const iconSize = 18;

function StackCard({group}) {
  const Icon = STACK_ICONS[group.icon];
  return (
    <TiltCard className={styles.tilt}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3 className={styles.title}>{group.title}</h3>
          <span className={styles.icon}><Icon size={iconSize} /></span>
        </div>
        <TechList items={group.items} />
      </div>
    </TiltCard>
  );
}

export default StackCard;
