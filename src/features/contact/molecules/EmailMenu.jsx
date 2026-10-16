import {AnimatePresence, motion} from 'framer-motion';
import {ChevronDown, Copy, Mail} from 'lucide-react';
import useDropdown from '../hooks/useDropdown';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const styles = {
  wrapper: 'relative',
  trigger: 'inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line bg-ink/60 px-5 py-2.5 text-sm backdrop-blur transition-colors hover:border-paper',
  chevron: 'transition-transform',
  chevronOpen: 'rotate-180 transition-transform',
  menu: 'absolute bottom-full left-0 z-20 mb-2 w-60 overflow-hidden rounded-xl border border-line bg-ink-soft shadow-2xl shadow-black/50',
  option: 'flex w-full cursor-pointer items-center gap-2 px-4 py-3 text-left text-sm text-fog transition-colors hover:bg-ink-raised hover:text-paper',
  divider: 'border-t border-line',
  address: 'px-4 pt-3 pb-1 font-mono text-[11px] text-fog/70',
};

const iconSize = 14;
const menuMotion = {initial: {opacity: 0, y: 6}, animate: {opacity: 1, y: 0}, exit: {opacity: 0, y: 6}, transition: {duration: 0.15}};

const linkTarget = (provider) => {
  if (provider.isExternal) {
    return {target: '_blank', rel: 'noreferrer'};
  }
  return {};
};

function EmailMenu({email, providers, fallbackUrl}) {
  const {containerRef, isOpen, toggle, close} = useDropdown();
  const {isCopied, copy} = useCopyToClipboard();
  return (
    <div ref={containerRef} className={styles.wrapper}>
      <button type="button" className={styles.trigger} onClick={toggle} aria-expanded={isOpen} aria-haspopup="menu">
        <Mail size={iconSize} />
        Email
        <ChevronDown size={iconSize} className={isOpen ? styles.chevronOpen : styles.chevron} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div className={styles.menu} role="menu" {...menuMotion}>
            <p className={styles.address}>{email}</p>
            {providers.map((provider) => (
              <a key={provider.label} href={provider.href} role="menuitem" className={styles.option} onClick={close} {...linkTarget(provider)}>
                <Mail size={iconSize} />
                {provider.label}
              </a>
            ))}
            <div className={styles.divider}>
              <button type="button" role="menuitem" className={styles.option} onClick={() => copy(email, fallbackUrl)}>
                <Copy size={iconSize} />
                {isCopied ? '¡Dirección copiada!' : 'Copiar dirección'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EmailMenu;
