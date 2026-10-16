import TechList from '../../../components/ui/TechList';
import {STACK_ICONS} from '../constants/stackIcons';

const styles = {
  row: 'grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-3 first:border-t-0',
  icon: 'grid h-8 w-8 place-items-center rounded-lg bg-ink-raised text-accent',
  title: 'text-sm font-semibold text-paper',
};

const iconSize = 16;

function StackGroup({group}) {
  const Icon = STACK_ICONS[group.icon];
  return (
    <div className={styles.row}>
      <span className={styles.icon}><Icon size={iconSize} /></span>
      <div>
        <h3 className={styles.title}>{group.title}</h3>
        <TechList items={group.items} />
      </div>
    </div>
  );
}

export default StackGroup;
