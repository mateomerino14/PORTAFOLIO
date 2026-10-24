import {AnimatePresence, motion} from 'framer-motion';
import {ArrowUp} from 'lucide-react';
import useJourneyProgress from '../../features/journey/hooks/useJourneyProgress';
import {scrollToTop} from '../../utils/scroll';
import {EASE_OUT} from '../../constants';

const styles = {
  toggle: 'fixed right-4 bottom-4 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-line bg-ink/90 text-paper shadow-glow backdrop-blur-md lg:hidden',
  ring: 'absolute inset-0 -rotate-90',
};

const ringSize = 48;
const ringCenter = ringSize / 2;
const ringRadius = 20;
const ringStroke = 3;
const ringLength = 2 * Math.PI * ringRadius;
const iconSize = 18;
const ringTransition = {duration: 0.5, ease: EASE_OUT};
const buttonMotion = {initial: {opacity: 0, scale: 0.8}, animate: {opacity: 1, scale: 1}, exit: {opacity: 0, scale: 0.8}, transition: {duration: 0.25, ease: EASE_OUT}};

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
  return (
    <AnimatePresence>
      {progress.ratio > 0 && (
        <motion.button type="button" className={styles.toggle} onClick={scrollToTop} aria-label={`Volver al inicio. Estás en ${progress.groupLabel}`} {...buttonMotion}>
          <ProgressRing ratio={progress.ratio} />
          <ArrowUp size={iconSize} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default JourneyMiniMap;
