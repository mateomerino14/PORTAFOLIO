import TechIcon from './TechIcon';

const styles = {
  list: 'grid gap-3',
  item: 'flex items-center gap-3 rounded-xl border border-line bg-ink-soft p-4',
  icon: 'grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10',
  title: 'block text-sm font-semibold text-paper',
  meta: 'mt-0.5 block text-xs text-fog',
};

const iconSize = 20;

function IconList({items}) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <span className={styles.icon}><TechIcon name={item.icon} size={iconSize} /></span>
          <span>
            <span className={styles.title}>{item.title}</span>
            {item.meta && <span className={styles.meta}>{item.meta}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default IconList;
