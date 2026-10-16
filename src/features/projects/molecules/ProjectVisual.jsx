import {motion} from 'framer-motion';

const styles = {
  frame: 'relative h-56 overflow-hidden rounded-xl bg-gradient-to-br to-ink-raised md:h-full md:min-h-[300px]',
  grid: 'absolute inset-0 bg-grid opacity-60',
  shape: 'absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[30%] border-2 border-current opacity-60',
  orb: 'absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-xl',
  kind: 'absolute bottom-4 left-4 font-mono text-xs text-paper/70',
  number: 'absolute top-3 right-4 font-display text-7xl font-extrabold text-paper/10',
};

const baseSpinSeconds = 18;
const spinStepSeconds = 4;
const orbTransition = {duration: 4, repeat: Infinity};
const shapeAnimation = {rotate: 360, borderRadius: ['30%', '50%', '30%']};
const orbAnimation = {scale: [1, 1.3, 1]};

function ProjectVisual({kind, accent, position}) {
  const spinTransition = {duration: baseSpinSeconds + position * spinStepSeconds, repeat: Infinity, ease: 'linear'};
  return (
    <div className={`${styles.frame} ${accent.gradient}`}>
      <div className={styles.grid} />
      <motion.div className={`${styles.shape} ${accent.text}`} animate={shapeAnimation} transition={spinTransition} />
      <motion.div className={`${styles.orb} ${accent.fill}`} animate={orbAnimation} transition={orbTransition} />
      <span className={styles.kind}>{kind}</span>
      <span className={styles.number}>0{position + 1}</span>
    </div>
  );
}

export default ProjectVisual;
