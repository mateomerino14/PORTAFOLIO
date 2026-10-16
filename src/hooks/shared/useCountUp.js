import {useEffect, useRef, useState} from 'react';
import {animate, useInView} from 'framer-motion';
import {EASE_OUT} from '../../constants';

const countDurationSeconds = 1.8;

function useCountUp(target) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }
    const controls = animate(0, target, {duration: countDurationSeconds, ease: EASE_OUT, onUpdate: setValue});
    return () => controls.stop();
  }, [isInView, target]);

  return {ref, value};
}

export default useCountUp;
