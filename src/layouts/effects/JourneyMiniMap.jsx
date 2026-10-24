import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Network, X} from 'lucide-react';
import useJourneyProgress from '../../features/journey/hooks/useJourneyProgress';
import {scrollToSection} from '../../utils/scroll';
import {EASE_OUT} from '../../constants';

const styles = {
  dock: 'fixed right-4 bottom-4 z-40 flex items-center gap-2 lg:hidden',
  pill: 'max-w-[55vw] truncate rounded-full border border-line bg-ink/90 px-3 py-1.5 text-[13px] font-medium text-paper backdrop-blur-md',
  pillCount: 'font-mono text-[11px] text-fog',
  toggle: 'relative grid h-14 w-14 cursor-pointer place-items-center rounded-full border border-line bg-ink/90 text-paper shadow-glow backdrop-blur-md',
  ring: 'absolute inset-0 -rotate-90',
  backdrop: 'fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm lg:hidden',
  panel: 'fixed inset-x-4 bottom-24 z-40 max-h-[60vh] overflow-y-auto rounded-2xl border border-line bg-ink-soft/95 py-2 backdrop-blur-xl lg:hidden',
  section: 'flex w-full cursor-pointer items-center gap-3 px-5 py-2.5 text-left text-sm text-fog',
  sectionActive: 'flex w-full cursor-pointer items-center gap-3 px-5 py-2.5 text-left text-sm font-semibold text-paper',
  dot: 'h-2 w-2 shrink-0 rounded-full border border-fog',
  dotVisited: 'h-2 w-2 shrink-0 rounded-full bg-accent',
  dotActive: 'h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-glow',
  branches: 'mb-1 ml-[1.45rem] border-l border-line',
  branch: 'block w-full cursor-pointer truncate py-1.5 pr-5 pl-4 text-left text-[13px] text-fog',
  branchActive: 'block w-full cursor-pointer truncate py-1.5 pr-5 pl-4 text-left text-[13px] text-signal',
};

const ringSize = 56;
const ringCenter = ringSize / 2;
const ringRadius = 24;
const ringStroke = 3;
const ringLength = 2 * Math.PI * ringRadius;
const iconSize = 20;
const panelTransition = {duration: 0.25, ease: EASE_OUT};
const panelMotion = {initial: {opacity: 0, y: 12}, animate: {opacity: 1, y: 0}, exit: {opacity: 0, y: 12}};
const backdropMotion = {initial: {opacity: 0}, animate: {opacity: 1}, exit: {opacity: 0}};
const ringTransition = {duration: 0.5, ease: EASE_OUT};
const centerActive = {block: 'center'};

const revealActive = (element) => {
  if (element) {
    element.scrollIntoView(centerActive);
  }
};

const dotClass = (section) => {
  if (section.isActive) {
    return styles.dotActive;
  }
  if (section.isVisited) {
    return styles.dotVisited;
  }
  return styles.dot;
};

function ToggleIcon({isOpen}) {
  if (isOpen) {
    return <X size={iconSize} aria-hidden="true" />;
  }
  return <Network size={iconSize} aria-hidden="true" />;
}

const countOf = (progress) => {
  if (progress.branchPosition < 0) {
    return '';
  }
  return ` ${progress.branchPosition + 1}/${progress.branches.length}`;
};

function ProgressRing({ratio}) {
  return (
    <svg className={styles.ring} viewBox={`0 0 ${ringSize} ${ringSize}`} aria-hidden="true">
      <circle cx={ringCenter} cy={ringCenter} r={ringRadius} fill="none" stroke="var(--color-line)" strokeWidth={ringStroke} />
      <motion.circle cx={ringCenter} cy={ringCenter} r={ringRadius} fill="none" stroke="var(--color-accent)" strokeWidth={ringStroke} strokeLinecap="round"
        strokeDasharray={ringLength} animate={{strokeDashoffset: ringLength * (1 - ratio)}} transition={ringTransition} />
    </svg>
  );
}

function JourneyMiniMap() {
  const [isOpen, setIsOpen] = useState(false);
  const progress = useJourneyProgress();

  const goTo = (stopId) => {
    setIsOpen(false);
    scrollToSection(stopId);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className={styles.backdrop} onClick={() => setIsOpen(false)} transition={panelTransition} {...backdropMotion} />
            <motion.nav className={styles.panel} aria-label="Mapa del recorrido" transition={panelTransition} {...panelMotion}>
              <ul>
                {progress.sections.map((section) => (
                  <li key={section.id}>
                    <button type="button" className={section.isActive ? styles.sectionActive : styles.section} onClick={() => goTo(section.id)} aria-current={section.isActive}>
                      <span className={dotClass(section)} />
                      {section.label}
                    </button>
                    {section.isActive && progress.branches.length > 0 && (
                      <div className={styles.branches}>
                        {progress.branches.map((branch) => (
                          <button key={branch.id} ref={branch.isActive ? revealActive : undefined} type="button" className={branch.isActive ? styles.branchActive : styles.branch} onClick={() => goTo(branch.id)} aria-current={branch.isActive}>
                            {branch.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      <div className={styles.dock}>
        <span className={styles.pill}>
          {progress.groupLabel}
          <span className={styles.pillCount}>{countOf(progress)}</span>
        </span>
        <button type="button" className={styles.toggle} onClick={() => setIsOpen((previous) => !previous)} aria-expanded={isOpen} aria-label="Ver el mapa del recorrido">
          <ProgressRing ratio={progress.ratio} />
          <ToggleIcon isOpen={isOpen} />
        </button>
      </div>
    </>
  );
}

export default JourneyMiniMap;
