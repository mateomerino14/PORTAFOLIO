import {AnimatePresence, motion} from 'framer-motion';
import useRotatingIndex from '../hooks/useRotatingIndex';
import {EASE_OUT} from '../../../constants';

const styles = {
  mask: 'relative inline-flex h-[1.3em] overflow-hidden align-bottom',
  role: 'inline-block text-lime',
};

const roleIntervalMs = 2600;

function RotatingRole({roles}) {
  const index = useRotatingIndex(roles.length, roleIntervalMs);
  return (
    <span className={styles.mask}>
      <AnimatePresence mode="wait">
        <motion.span key={index} className={styles.role} initial={{y: '100%', opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: '-100%', opacity: 0}}
          transition={{duration: 0.45, ease: EASE_OUT}}>
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default RotatingRole;
