import {motion} from 'framer-motion';
import {EASE_OUT} from '../../constants';

const styles = {
  title: 'mb-6 font-display text-3xl leading-[1.05] font-extrabold tracking-tight md:text-5xl',
  wordMask: 'mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom',
  word: 'inline-block',
};

const titleViewport = {once: true, margin: '-60px'};
const wordStaggerSeconds = 0.06;
const wordVariants = {
  hidden: {y: '110%'},
  visible: {y: 0, transition: {duration: 0.7, ease: EASE_OUT}},
};

function SectionTitle({title}) {
  return (
    <motion.h2 className={styles.title} initial="hidden" whileInView="visible" viewport={titleViewport} transition={{staggerChildren: wordStaggerSeconds}}>
      {title.split(' ').map((word, position) => (
        <span key={position} className={styles.wordMask}>
          <motion.span className={styles.word} variants={wordVariants}>{word}</motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

export default SectionTitle;
