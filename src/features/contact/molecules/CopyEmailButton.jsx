import {AnimatePresence, motion} from 'framer-motion';
import Magnetic from '../../../components/ui/Magnetic';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const styles = {
  wrapper: 'flex flex-col items-start gap-3',
  button: 'max-w-full cursor-pointer overflow-hidden rounded-full border border-line bg-ink-soft px-6 py-4 font-mono text-sm transition-colors hover:border-accent sm:px-8 sm:py-5 md:text-lg',
  label: 'block',
  hint: 'font-mono text-xs text-fog',
};

const magneticStrength = 0.25;
const labelMotion = {
  initial: {y: 20, opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {y: -20, opacity: 0},
};

function CopyEmailButton({email, fallbackUrl}) {
  const {isCopied, copy} = useCopyToClipboard();
  return (
    <div className={styles.wrapper}>
      <Magnetic strength={magneticStrength}>
        <button type="button" className={styles.button} onClick={() => copy(email, fallbackUrl)}>
          <AnimatePresence mode="wait">
            <motion.span key={String(isCopied)} className={styles.label} {...labelMotion}>
              {isCopied ? '¡Email copiado!' : email}
            </motion.span>
          </AnimatePresence>
        </button>
      </Magnetic>
      <span className={styles.hint}>Clic para copiar</span>
    </div>
  );
}

export default CopyEmailButton;
