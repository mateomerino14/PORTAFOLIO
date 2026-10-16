import {useRef} from 'react';
import {useMotionValue, useSpring, useTransform} from 'framer-motion';
import {COLORS} from '../../constants';

const maxTiltDegrees = 7;
const centerPosition = 0.5;
const glowRadiusPx = 420;
const springConfig = {stiffness: 200, damping: 20};

function usePointerTilt() {
  const ref = useRef(null);
  const pointerX = useMotionValue(centerPosition);
  const pointerY = useMotionValue(centerPosition);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [maxTiltDegrees, -maxTiltDegrees]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-maxTiltDegrees, maxTiltDegrees]), springConfig);
  const glow = useTransform([pointerX, pointerY], ([x, y]) => `radial-gradient(${glowRadiusPx}px circle at ${x * 100}% ${y * 100}%, ${COLORS.accentTint}, transparent 45%)`);

  const handlePointerMove = (event) => {
    const bounds = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const handlePointerLeave = () => {
    pointerX.set(centerPosition);
    pointerY.set(centerPosition);
  };

  return {ref, rotateX, rotateY, glow, handlePointerMove, handlePointerLeave};
}

export default usePointerTilt;
