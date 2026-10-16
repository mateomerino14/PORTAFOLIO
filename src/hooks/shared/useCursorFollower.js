import {useEffect} from 'react';
import {useMotionValue, useSpring} from 'framer-motion';

const hiddenPositionPx = -500;
const springConfig = {stiffness: 80, damping: 20};

function useCursorFollower(isEnabled, centerOffsetPx) {
  const cursorX = useMotionValue(hiddenPositionPx);
  const cursorY = useMotionValue(hiddenPositionPx);
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    const handlePointerMove = (event) => {
      cursorX.set(event.clientX - centerOffsetPx);
      cursorY.set(event.clientY - centerOffsetPx);
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [isEnabled, centerOffsetPx, cursorX, cursorY]);

  return {x: smoothX, y: smoothY};
}

export default useCursorFollower;
