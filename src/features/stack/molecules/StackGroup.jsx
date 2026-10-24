import {ChevronDown} from 'lucide-react';
import TechList from '../../../components/ui/TechList';
import useExpandableList from '../../../hooks/shared/useExpandableList';
import {STACK_ICONS} from '../constants/stackIcons';

const styles = {
  row: 'grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-3 first:border-t-0',
  list: 'mt-2',
  icon: 'grid h-8 w-8 place-items-center rounded-lg bg-ink-raised text-accent',
  title: 'text-sm font-semibold text-paper',
  toggle: 'mt-2 inline-flex cursor-pointer items-center gap-1 font-mono text-[11px] text-fog transition-colors hover:text-accent',
  chevron: 'transition-transform duration-300',
  chevronOpen: 'rotate-180 transition-transform duration-300',
};

const iconSize = 16;
const chevronSize = 14;
const visibleTechnologies = 4;

const toggleLabel = (isExpanded, hiddenCount) => {
  if (isExpanded) {
    return 'Ver menos';
  }
  return `Ver ${hiddenCount} más`;
};

function StackGroup({group, linkedTechnologies, hoveredTech, onTechEnter, onTechLeave}) {
  const Icon = STACK_ICONS[group.icon];
  const {visibleItems, hiddenCount, isExpanded, canExpand, toggle} = useExpandableList(group.items, visibleTechnologies);
  return (
    <div className={styles.row}>
      <span className={styles.icon}><Icon size={iconSize} /></span>
      <div>
        <h3 className={styles.title}>{group.title}</h3>
        <TechList items={visibleItems} className={styles.list} interactiveItems={linkedTechnologies} activeItem={hoveredTech} onItemEnter={onTechEnter} onItemLeave={onTechLeave} />
        {canExpand && (
          <button type="button" className={styles.toggle} onClick={toggle} aria-expanded={isExpanded}>
            {toggleLabel(isExpanded, hiddenCount)}
            <ChevronDown size={chevronSize} className={isExpanded ? styles.chevronOpen : styles.chevron} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

export default StackGroup;
