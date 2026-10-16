import {motion} from 'framer-motion';

const styles = {
  button: 'grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-line lg:hidden',
  lines: 'flex flex-col gap-1.5',
  line: 'block h-0.5 w-5 bg-paper',
};

const lineOffsetPx = 4;
const closedLine = {rotate: 0, y: 0};

function MenuToggle({isOpen, onToggle}) {
  let topLine = closedLine;
  let bottomLine = closedLine;
  if (isOpen) {
    topLine = {rotate: 45, y: lineOffsetPx};
    bottomLine = {rotate: -45, y: -lineOffsetPx};
  }
  return (
    <button type="button" className={styles.button} onClick={onToggle} aria-label="Abrir menú" aria-expanded={isOpen}>
      <div className={styles.lines}>
        <motion.span className={styles.line} animate={topLine} />
        <motion.span className={styles.line} animate={bottomLine} />
      </div>
    </button>
  );
}

export default MenuToggle;
