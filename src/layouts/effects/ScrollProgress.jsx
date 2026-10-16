import {motion, useScroll, useSpring} from 'framer-motion';

const styles = {
  bar: 'fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-violet via-cyan to-lime',
};

const springConfig = {stiffness: 120, damping: 25};

function ScrollProgress() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, springConfig);
  return <motion.div className={styles.bar} style={{scaleX}} />;
}

export default ScrollProgress;
