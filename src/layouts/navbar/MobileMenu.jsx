import {AnimatePresence, motion} from 'framer-motion';
import {EASE_OUT} from '../../constants';

const styles = {
  panel: 'fixed inset-0 z-40 flex flex-col justify-center bg-ink-soft px-8 lg:hidden',
  link: 'cursor-pointer py-3 text-left font-display text-4xl font-extrabold',
  number: 'mr-4 font-mono text-sm text-lime',
};

const panelTransition = {duration: 0.6, ease: EASE_OUT};
const linkDelaySeconds = 0.15;
const linkStaggerSeconds = 0.05;
const linkHidden = {opacity: 0, x: -30};
const linkVisible = {opacity: 1, x: 0};

const panelVariants = {
  hidden: {clipPath: 'circle(0% at 95% 5%)'},
  visible: {clipPath: 'circle(150% at 95% 5%)'},
};

function MobileMenu({isOpen, items, onNavigate}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.panel} variants={panelVariants} initial="hidden" animate="visible" exit="hidden" transition={panelTransition}>
          {items.map((item, position) => (
            <motion.button key={item.id} type="button" className={styles.link} onClick={() => onNavigate(item.id)}
              initial={linkHidden} animate={linkVisible} transition={{delay: linkDelaySeconds + position * linkStaggerSeconds}}>
              <span className={styles.number}>0{position + 1}</span>
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
