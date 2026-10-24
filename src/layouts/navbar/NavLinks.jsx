import {motion} from 'framer-motion';
import useJourneyProgress from '../../features/journey/hooks/useJourneyProgress';
import {scrollToSection} from '../../utils/scroll';

const styles = {
  list: 'hidden items-start lg:flex',
  item: 'relative flex flex-col items-center',
  link: 'relative cursor-pointer rounded-lg px-3 py-2 text-sm text-fog transition-colors hover:text-paper',
  activePill: 'absolute inset-0 rounded-lg bg-ink-raised',
  label: 'relative',
  activeLabel: 'relative text-paper',
  track: 'relative mt-1 flex h-3 w-full items-center justify-center',
  segmentLeft: 'absolute right-1/2 left-0 h-px bg-line transition-colors duration-500',
  segmentLeftDone: 'absolute right-1/2 left-0 h-px bg-accent transition-colors duration-500',
  segmentRight: 'absolute right-0 left-1/2 h-px bg-line transition-colors duration-500',
  segmentRightDone: 'absolute right-0 left-1/2 h-px bg-accent transition-colors duration-500',
  node: 'relative h-2 w-2 rounded-full border border-fog bg-ink transition-all duration-300',
  nodeVisited: 'relative h-2 w-2 rounded-full border border-accent bg-accent transition-all duration-300',
  nodeActive: 'relative h-2.5 w-2.5 rounded-full border border-accent bg-accent shadow-glow transition-all duration-300',
  branches: 'absolute top-full left-1/2 mt-0.5 flex -translate-x-1/2 gap-1',
  branch: 'h-1.5 w-1.5 cursor-pointer rounded-full bg-fog/40 transition-colors hover:bg-paper',
  branchVisited: 'h-1.5 w-1.5 cursor-pointer rounded-full bg-accent/80 transition-colors hover:bg-paper',
  branchActive: 'h-1.5 w-1.5 cursor-pointer rounded-full bg-signal',
};

const pillTransition = {type: 'spring', stiffness: 380, damping: 30};

const nodeClass = (position, activePosition) => {
  if (position === activePosition) {
    return styles.nodeActive;
  }
  if (position < activePosition) {
    return styles.nodeVisited;
  }
  return styles.node;
};

const leftSegmentClass = (position, activePosition) => {
  if (position <= activePosition) {
    return styles.segmentLeftDone;
  }
  return styles.segmentLeft;
};

const rightSegmentClass = (position, activePosition) => {
  if (position < activePosition) {
    return styles.segmentRightDone;
  }
  return styles.segmentRight;
};

const branchClass = (branch) => {
  if (branch.isActive) {
    return styles.branchActive;
  }
  if (branch.isVisited) {
    return styles.branchVisited;
  }
  return styles.branch;
};

function BranchDots({branches}) {
  return (
    <span className={styles.branches}>
      {branches.map((branch) => (
        <button key={branch.id} type="button" className={branchClass(branch)} onClick={() => scrollToSection(branch.id)} aria-label={branch.label} title={branch.label} aria-current={branch.isActive} />
      ))}
    </span>
  );
}

function NavLinks({items, activeId, onNavigate}) {
  const progress = useJourneyProgress();
  const activePosition = items.findIndex((item) => item.id === activeId);
  const lastPosition = items.length - 1;
  return (
    <ul className={styles.list}>
      {items.map((item, position) => (
        <li key={item.id} className={styles.item}>
          <button type="button" className={styles.link} onClick={() => onNavigate(item.id)} aria-current={position === activePosition}>
            {position === activePosition && <motion.span layoutId="nav-pill" className={styles.activePill} transition={pillTransition} />}
            <span className={position === activePosition ? styles.activeLabel : styles.label}>{item.label}</span>
          </button>
          <span className={styles.track} aria-hidden="true">
            {position > 0 && <span className={leftSegmentClass(position, activePosition)} />}
            {position < lastPosition && <span className={rightSegmentClass(position, activePosition)} />}
            <span className={nodeClass(position, activePosition)} />
          </span>
          {position === activePosition && progress.branches.length > 0 && <BranchDots branches={progress.branches} />}
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
