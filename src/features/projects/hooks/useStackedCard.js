import {useRef} from 'react';
import {useScroll, useTransform} from 'framer-motion';

const minScale = 0.92;

function useStackedCard() {
  const cardRef = useRef(null);
  const {scrollYProgress} = useScroll({target: cardRef, offset: ['start end', 'start start']});
  const scale = useTransform(scrollYProgress, [0, 1], [minScale, 1]);
  return {cardRef, scale};
}

export default useStackedCard;
