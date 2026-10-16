import {motion} from 'framer-motion';
import {EASE_OUT} from '../../../constants';

const styles = {
  wrapper: 'min-w-[180px] flex-1',
  header: 'mb-2 flex justify-between font-mono text-xs',
  name: 'text-paper',
  track: 'h-1 overflow-hidden rounded-full bg-line',
  fill: 'h-full rounded-full bg-gradient-to-r from-signal to-accent',
};

const fillDurationSeconds = 1.4;
const fillViewport = {once: true};

function LanguageBar({language}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.name}>{language.name}</span>
        <span>{language.level}</span>
      </div>
      <div className={styles.track}>
        <motion.div className={styles.fill} initial={{width: 0}} whileInView={{width: `${language.percent}%`}} viewport={fillViewport} transition={{duration: fillDurationSeconds, ease: EASE_OUT}} />
      </div>
    </div>
  );
}

export default LanguageBar;
