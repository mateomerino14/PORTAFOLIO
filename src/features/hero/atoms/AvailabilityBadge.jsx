import {motion} from 'framer-motion';

const styles = {
  badge: 'mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-soft/70 px-3 py-1.5 font-mono text-xs text-fog backdrop-blur',
  dot: 'relative flex h-2 w-2',
  ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75',
  core: 'relative inline-flex h-2 w-2 rounded-full bg-lime',
};

function AvailabilityBadge({text}) {
  return (
    <motion.div className={styles.badge} initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}}>
      <span className={styles.dot}>
        <span className={styles.ping} />
        <span className={styles.core} />
      </span>
      {text}
    </motion.div>
  );
}

export default AvailabilityBadge;
