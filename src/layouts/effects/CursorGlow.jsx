import {motion} from 'framer-motion';
import useCursorFollower from '../../hooks/shared/useCursorFollower';
import useMediaQuery from '../../hooks/shared/useMediaQuery';
import {COLORS, MEDIA_QUERIES} from '../../constants';

const styles = {
  glow: 'pointer-events-none fixed top-0 left-0 z-0 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl',
};

const glowRadiusPx = 250;
const glowBackground = `radial-gradient(circle, ${COLORS.violetTint}, transparent 65%)`;

function CursorGlow() {
  const hasFinePointer = useMediaQuery(MEDIA_QUERIES.finePointer);
  const {x, y} = useCursorFollower(hasFinePointer, glowRadiusPx);
  if (!hasFinePointer) {
    return null;
  }
  return <motion.div aria-hidden className={styles.glow} style={{x, y, background: glowBackground}} />;
}

export default CursorGlow;
