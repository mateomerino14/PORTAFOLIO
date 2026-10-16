import {motion} from 'framer-motion';
import usePointerTilt from '../../hooks/shared/usePointerTilt';

const styles = {
  card: 'group relative',
  glow: 'pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100',
};

const perspectivePx = 900;

function TiltCard({children, className = ''}) {
  const {ref, rotateX, rotateY, glow, handlePointerMove, handlePointerLeave} = usePointerTilt();
  return (
    <motion.div ref={ref} className={`${styles.card} ${className}`} style={{rotateX, rotateY, transformPerspective: perspectivePx}}
      onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <motion.div className={styles.glow} style={{background: glow}} />
      {children}
    </motion.div>
  );
}

export default TiltCard;
