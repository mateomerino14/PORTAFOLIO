import {AnimatePresence, motion} from 'framer-motion';
import {ChevronRight, Download} from 'lucide-react';
import {EASE_OUT} from '../../constants';

const styles = {
  backdrop: 'fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm lg:hidden',
  panel: 'fixed inset-x-4 top-20 z-40 overflow-hidden rounded-2xl border border-line bg-ink-soft/95 shadow-2xl shadow-black/60 backdrop-blur-xl lg:hidden',
  heading: 'px-5 pt-4 pb-2 font-mono text-[11px] tracking-widest text-fog uppercase',
  list: 'divide-y divide-line',
  link: 'flex w-full cursor-pointer items-center gap-3 px-5 py-3.5 text-left text-base text-fog transition-colors hover:bg-ink-raised hover:text-paper',
  linkActive: 'flex w-full cursor-pointer items-center gap-3 bg-ink-raised px-5 py-3.5 text-left text-base text-paper',
  index: 'w-6 font-mono text-xs text-fog/60',
  icon: 'text-accent',
  label: 'flex-1 font-medium',
  chevron: 'text-fog/50',
  footer: 'border-t border-line p-4',
  cvLink: 'flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-ink',
};

const panelTransition = {duration: 0.25, ease: EASE_OUT};
const panelMotion = {initial: {opacity: 0, y: -12, scale: 0.98}, animate: {opacity: 1, y: 0, scale: 1}, exit: {opacity: 0, y: -12, scale: 0.98}};
const backdropMotion = {initial: {opacity: 0}, animate: {opacity: 1}, exit: {opacity: 0}};
const linkDelaySeconds = 0.05;
const linkStaggerSeconds = 0.03;
const linkHidden = {opacity: 0, x: -12};
const linkVisible = {opacity: 1, x: 0};
const iconSize = 18;
const indexDigits = 2;

const formatIndex = (position) => String(position + 1).padStart(indexDigits, '0');

function MobileMenu({isOpen, items, activeId, cvUrl, cvFileName, onNavigate, onClose}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className={styles.backdrop} onClick={onClose} transition={panelTransition} {...backdropMotion} />
          <motion.nav className={styles.panel} aria-label="Secciones" transition={panelTransition} {...panelMotion}>
            <p className={styles.heading}>Secciones</p>
            <ul className={styles.list}>
              {items.map((item, position) => {
                const Icon = item.icon;
                return (
                  <motion.li key={item.id} initial={linkHidden} animate={linkVisible} transition={{delay: linkDelaySeconds + position * linkStaggerSeconds}}>
                    <button type="button" className={item.id === activeId ? styles.linkActive : styles.link} onClick={() => onNavigate(item.id)} aria-current={item.id === activeId ? 'location' : undefined}>
                      <span className={styles.index}>{formatIndex(position)}</span>
                      <Icon size={iconSize} className={styles.icon} />
                      <span className={styles.label}>{item.label}</span>
                      <ChevronRight size={iconSize} className={styles.chevron} />
                    </button>
                  </motion.li>
                );
              })}
            </ul>
            <div className={styles.footer}>
              <a href={cvUrl} download={cvFileName} target="_blank" rel="noreferrer" className={styles.cvLink}>
                <Download size={iconSize} />
                Descargar CV
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
