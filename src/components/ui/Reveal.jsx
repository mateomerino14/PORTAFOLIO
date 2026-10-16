import {motion} from 'framer-motion';
import {EASE_OUT} from '../../constants';

const revealViewport = {once: true, margin: '-80px'};
const revealDurationSeconds = 0.8;
const hiddenBlur = 'blur(8px)';
const visibleBlur = 'blur(0px)';

function Reveal({children, delay = 0, offsetY = 28, className = ''}) {
  return (
    <motion.div className={className} initial={{opacity: 0, y: offsetY, filter: hiddenBlur}} whileInView={{opacity: 1, y: 0, filter: visibleBlur}}
      viewport={revealViewport} transition={{duration: revealDurationSeconds, delay, ease: EASE_OUT}}>
      {children}
    </motion.div>
  );
}

export default Reveal;
