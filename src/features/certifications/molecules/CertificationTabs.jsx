import {motion} from 'framer-motion';

const styles = {
  list: 'mb-10 inline-flex rounded-full border border-line bg-ink-soft p-1',
  tab: 'relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-6',
  activeTab: 'text-ink',
  idleTab: 'text-fog hover:text-paper',
  pill: 'absolute inset-0 rounded-full bg-lime',
  label: 'relative',
  count: 'opacity-60',
};

const pillTransition = {type: 'spring', stiffness: 400, damping: 32};

function CertificationTabs({groups, activeIndex, onSelect}) {
  return (
    <div className={styles.list} role="tablist">
      {groups.map((group, index) => (
        <button key={group.group} type="button" role="tab" aria-selected={activeIndex === index}
          className={`${styles.tab} ${activeIndex === index ? styles.activeTab : styles.idleTab}`} onClick={() => onSelect(index)}>
          {activeIndex === index && <motion.span layoutId="cert-pill" className={styles.pill} transition={pillTransition} />}
          <span className={styles.label}>{group.group} <span className={styles.count}>{group.items.length}</span></span>
        </button>
      ))}
    </div>
  );
}

export default CertificationTabs;
