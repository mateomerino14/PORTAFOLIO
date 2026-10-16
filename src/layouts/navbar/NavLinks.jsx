import {motion} from 'framer-motion';

const styles = {
  list: 'hidden items-center gap-1 lg:flex',
  link: 'relative cursor-pointer rounded-lg px-3 py-2 text-sm text-fog transition-colors hover:text-paper',
  activePill: 'absolute inset-0 rounded-lg bg-ink-raised',
  label: 'relative',
  activeLabel: 'relative text-paper',
};

const pillTransition = {type: 'spring', stiffness: 380, damping: 30};

function NavLinks({items, activeId, onNavigate}) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <button type="button" className={styles.link} onClick={() => onNavigate(item.id)}>
            {activeId === item.id && <motion.span layoutId="nav-pill" className={styles.activePill} transition={pillTransition} />}
            <span className={activeId === item.id ? styles.activeLabel : styles.label}>{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
