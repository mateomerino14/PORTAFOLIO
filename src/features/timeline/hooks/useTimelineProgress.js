import {useRef} from 'react';
import {useScroll, useTransform} from 'framer-motion';

function useTimelineProgress() {
  const trackRef = useRef(null);
  const {scrollYProgress} = useScroll({target: trackRef, offset: ['start 70%', 'end 60%']});
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return {trackRef, fillHeight};
}

export default useTimelineProgress;
