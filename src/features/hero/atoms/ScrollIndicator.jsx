import {motion} from 'framer-motion';

const styles = {
  button: 'absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-fog uppercase',
  track: 'relative h-10 w-[1px] overflow-hidden bg-line',
  thumb: 'absolute top-0 left-0 h-4 w-full bg-accent',
};

const thumbTransition = {repeat: Infinity, duration: 1.6, ease: 'easeInOut'};
const thumbAnimation = {y: ['-100%', '250%']};
const indicatorMotion = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  transition: {delay: 2},
};

function ScrollIndicator({onClick}) {
  return (
    <motion.button type="button" className={styles.button} onClick={onClick} aria-label="Bajar a la siguiente sección" {...indicatorMotion}>
      Scroll
      <span className={styles.track}>
        <motion.span className={styles.thumb} animate={thumbAnimation} transition={thumbTransition} />
      </span>
    </motion.button>
  );
}

export default ScrollIndicator;
