import {motion} from 'framer-motion';
import {EASE_OUT} from '../../constants';

const revealViewport = {once: true, margin: '-80px'};

function Reveal({children, delay = 0, offsetY = 28, className = ''}) {
  return (
    <motion.div className={className} initial={{opacity: 0, y: offsetY, filter: 'blur(8px)'}} whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
      viewport={revealViewport} transition={{duration: 0.8, delay, ease: EASE_OUT}}>
      {children}
    </motion.div>
  );
}

export default Reveal;
