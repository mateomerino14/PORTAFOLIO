import {createPortal} from 'react-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {X} from 'lucide-react';
import ProjectPanel from './ProjectPanel';
import {EASE_OUT} from '../../../constants';

const styles = {
  overlay: 'fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-3 backdrop-blur-sm md:p-6',
  sheet: 'relative max-h-[92svh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-2xl border border-line bg-ink p-5 md:p-8',
  close: 'sticky top-0 z-10 mb-2 ml-auto grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-line bg-ink-soft text-paper transition-colors hover:border-accent hover:text-accent',
};

const closeIconSize = 20;
const overlayMotion = {initial: {opacity: 0}, animate: {opacity: 1}, exit: {opacity: 0}};
const sheetMotion = {
  initial: {opacity: 0, y: 24},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: 24},
  transition: {duration: 0.35, ease: EASE_OUT},
};

const keepOpen = (event) => event.stopPropagation();

function ProjectDialog({project, onClose}) {
  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title} {...overlayMotion}>
          <motion.div className={styles.sheet} onClick={keepOpen} data-lenis-prevent {...sheetMotion}>
            <button type="button" className={styles.close} onClick={onClose} aria-label="Cerrar proyecto"><X size={closeIconSize} /></button>
            <ProjectPanel project={project} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default ProjectDialog;
