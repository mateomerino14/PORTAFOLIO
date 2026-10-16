const styles = {
  list: 'font-mono text-xs leading-relaxed text-fog',
  item: 'inline',
  interactive: 'inline cursor-pointer underline decoration-accent/50 decoration-dotted underline-offset-4 transition-colors hover:text-paper focus-visible:text-paper focus-visible:outline-none',
  active: 'inline cursor-pointer text-accent underline decoration-accent decoration-dotted underline-offset-4',
};

const separator = ' · ';
const noItems = new Set();

const itemClass = (item, interactiveItems, activeItem) => {
  if (!interactiveItems.has(item)) {
    return styles.item;
  }
  if (item === activeItem) {
    return styles.active;
  }
  return styles.interactive;
};

function TechList({items, className = '', interactiveItems = noItems, activeItem = '', onItemEnter, onItemLeave}) {
  return (
    <p className={`${styles.list} ${className}`}>
      {items.map((item, position) => {
        const isInteractive = interactiveItems.has(item);
        return (
          <span key={item}>
            {position > 0 && separator}
            {isInteractive && (
              <button type="button" className={itemClass(item, interactiveItems, activeItem)}
                onMouseEnter={() => onItemEnter(item)} onMouseLeave={onItemLeave} onFocus={() => onItemEnter(item)} onBlur={onItemLeave} onClick={() => onItemEnter(item)}>
                {item}
              </button>
            )}
            {!isInteractive && <span className={styles.item}>{item}</span>}
          </span>
        );
      })}
    </p>
  );
}

export default TechList;
