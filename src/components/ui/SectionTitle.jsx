import {motion} from 'framer-motion';
import Reveal from './Reveal';
import {EASE_OUT} from '../../constants';

const styles = {
  wrapper: 'mb-14 md:mb-20',
  kicker: 'mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase',
  index: 'text-fog',
  divider: 'h-px w-10 bg-accent/50',
  title: 'font-display text-4xl leading-[1.02] font-extrabold tracking-tight md:text-6xl',
  wordMask: 'mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom',
  word: 'inline-block',
};

const titleViewport = {once: true, margin: '-60px'};
const wordVariants = {
  hidden: {y: '110%'},
  visible: {y: 0, transition: {duration: 0.7, ease: EASE_OUT}},
};

function SectionTitle({index, kicker, title}) {
  return (
    <div className={styles.wrapper}>
      <Reveal>
        <p className={styles.kicker}>
          <span className={styles.index}>{index}</span>
          <span className={styles.divider} />
          {kicker}
        </p>
      </Reveal>
      <motion.h2 className={styles.title} initial="hidden" whileInView="visible" viewport={titleViewport} transition={{staggerChildren: 0.06}}>
        {title.split(' ').map((word, position) => (
          <span key={position} className={styles.wordMask}>
            <motion.span className={styles.word} variants={wordVariants}>{word}</motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
