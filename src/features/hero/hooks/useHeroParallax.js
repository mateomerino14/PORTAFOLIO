import {useRef} from 'react';
import {useScroll, useTransform} from 'framer-motion';

function useHeroParallax() {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({target: sectionRef, offset: ['start start', 'end start']});
  const sceneY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  return {sectionRef, sceneY, sceneOpacity, contentY};
}

export default useHeroParallax;
