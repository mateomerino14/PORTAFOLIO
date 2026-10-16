import TechIcon from './TechIcon';

const styles = {
  list: 'flex flex-wrap gap-1.5',
  badge: 'inline-flex items-center gap-1.5 rounded-md border border-line bg-ink-soft/80 px-2 py-1 font-mono text-[11px] text-fog',
  interactive: 'inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-dashed border-accent/40 bg-ink-soft/80 px-2 py-1 font-mono text-[11px] text-fog transition-colors hover:border-accent hover:text-paper focus-visible:border-accent focus-visible:text-paper focus-visible:outline-none',
  active: 'inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-accent bg-accent/15 px-2 py-1 font-mono text-[11px] text-paper',
};

const noItems = new Set();

const interactiveClass = (item, activeItem) => {
  if (item === activeItem) {
    return styles.active;
  }
  return styles.interactive;
};

function TechList({items, className = '', interactiveItems = noItems, activeItem = '', onItemEnter, onItemLeave}) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {items.map((item) => (
        <li key={item}>
          {interactiveItems.has(item) && (
            <button type="button" className={interactiveClass(item, activeItem)}
              onMouseEnter={() => onItemEnter(item)} onMouseLeave={onItemLeave} onFocus={() => onItemEnter(item)} onBlur={onItemLeave} onClick={() => onItemEnter(item)}>
              <TechIcon name={item} />
              {item}
            </button>
          )}
          {!interactiveItems.has(item) && (
            <span className={styles.badge}>
              <TechIcon name={item} />
              {item}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TechList;
