import {AnimatePresence, motion} from 'framer-motion';
import {Network} from 'lucide-react';
import useJourneyProgress from '../../features/journey/hooks/useJourneyProgress';
import useNearPageEnd from '../../hooks/shared/useNearPageEnd';
import {EASE_OUT} from '../../constants';

const styles = {
  dock: 'pointer-events-none fixed right-4 bottom-4 z-40 flex items-center gap-2 lg:hidden',
  pill: 'max-w-[55vw] truncate rounded-full border border-line bg-ink/90 px-3 py-1.5 text-[13px] font-medium text-paper backdrop-blur-md',
  pillCount: 'font-mono text-[11px] text-fog',
  ball: 'relative grid h-14 w-14 place-items-center rounded-full border border-line bg-ink/90 text-paper shadow-glow backdrop-blur-md',
  ring: 'absolute inset-0 -rotate-90',
};

const ringSize = 56;
const ringCenter = ringSize / 2;
const ringRadius = 24;
const ringStroke = 3;
const ringLength = 2 * Math.PI * ringRadius;
const iconSize = 20;
const ringTransition = {duration: 0.5, ease: EASE_OUT};
const footerClearancePx = 120;
const dockMotion = {initial: {opacity: 0, y: 12}, animate: {opacity: 1, y: 0}, exit: {opacity: 0, y: 12}, transition: {duration: 0.25, ease: EASE_OUT}};

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
  const progress = useJourneyProgress();
  const isNearEnd = useNearPageEnd(footerClearancePx);
  return (
    <AnimatePresence>
      {!isNearEnd && (
        <motion.div className={styles.dock} role="status" aria-live="polite" {...dockMotion}>
          <span className={styles.pill}>
            {progress.groupLabel}
            <span className={styles.pillCount}>{countOf(progress)}</span>
          </span>
          <span className={styles.ball}>
            <ProgressRing ratio={progress.ratio} />
            <Network size={iconSize} aria-hidden="true" />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default JourneyMiniMap;
