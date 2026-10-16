import {useRef} from 'react';
import {useSpring} from 'framer-motion';

const springConfig = {stiffness: 250, damping: 15};

function useMagneticPull(strength) {
  const ref = useRef(null);
  const offsetX = useSpring(0, springConfig);
  const offsetY = useSpring(0, springConfig);

  const handlePointerMove = (event) => {
    const bounds = ref.current.getBoundingClientRect();
    offsetX.set((event.clientX - (bounds.left + bounds.width / 2)) * strength);
    offsetY.set((event.clientY - (bounds.top + bounds.height / 2)) * strength);
  };

  const handlePointerLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return {ref, offsetX, offsetY, handlePointerMove, handlePointerLeave};
}

export default useMagneticPull;
