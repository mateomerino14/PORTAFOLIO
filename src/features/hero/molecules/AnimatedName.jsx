import {motion} from 'framer-motion';
import {EASE_OUT} from '../../../constants';

const styles = {
  title: 'font-display text-[clamp(3.4rem,11vw,9rem)] leading-[0.88] font-extrabold tracking-[-0.04em]',
  line: 'block overflow-hidden',
  letter: 'inline-block',
  outlined: 'inline-block text-outline',
  accent: 'inline-block text-accent',
};

const initialDelaySeconds = 0.5;
const letterDelaySeconds = 0.035;

const letterVariants = {
  hidden: {y: '110%'},
  visible: (order) => ({y: 0, transition: {delay: initialDelaySeconds + order * letterDelaySeconds, duration: 0.8, ease: EASE_OUT}}),
};

function AnimatedName({firstName, lastName}) {
  const lastNameOffset = firstName.length;
  return (
    <h1 className={styles.title}>
      <span className={styles.line}>
        {firstName.split('').map((letter, position) => (
          <motion.span key={position} className={styles.letter} custom={position} variants={letterVariants} initial="hidden" animate="visible">{letter}</motion.span>
        ))}
      </span>
      <span className={styles.line}>
        {lastName.split('').map((letter, position) => (
          <motion.span key={position} className={styles.outlined} custom={lastNameOffset + position} variants={letterVariants} initial="hidden" animate="visible">{letter}</motion.span>
        ))}
        <motion.span className={styles.accent} custom={lastNameOffset + lastName.length} variants={letterVariants} initial="hidden" animate="visible">.</motion.span>
      </span>
    </h1>
  );
}

export default AnimatedName;
