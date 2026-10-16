import {motion} from 'framer-motion';
import useMagneticPull from '../../hooks/shared/useMagneticPull';

const styles = {
  wrapper: 'inline-block',
};

const defaultStrength = 0.35;

function Magnetic({children, strength = defaultStrength}) {
  const {ref, offsetX, offsetY, handlePointerMove, handlePointerLeave} = useMagneticPull(strength);
  return (
    <motion.div ref={ref} className={styles.wrapper} style={{x: offsetX, y: offsetY}} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {children}
    </motion.div>
  );
}

export default Magnetic;
