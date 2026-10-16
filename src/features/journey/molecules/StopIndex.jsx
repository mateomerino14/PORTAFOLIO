import {ArrowRight} from 'lucide-react';
import {scrollToSection} from '../../../utils/scroll';
import {publicAsset} from '../../../utils/assets';

const styles = {
  list: 'mt-4 grid grid-cols-[minmax(0,1fr)] border-t border-line',
  listTwoColumns: 'mt-4 grid grid-cols-[minmax(0,1fr)] border-t border-line md:grid-cols-2 md:gap-x-6',
  item: 'group flex w-full cursor-pointer items-center gap-3 border-b border-line py-2.5 text-left transition-colors',
  thumbnail: 'h-10 w-16 shrink-0 rounded-md border border-line object-cover object-top opacity-80 transition-opacity group-hover:opacity-100',
  iconBox: 'grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-ink-raised text-accent',
  body: 'min-w-0 flex-1',
  label: 'block truncate text-sm text-paper/90 transition-colors group-hover:text-paper',
  meta: 'mt-0.5 block truncate font-mono text-[11px] text-fog',
  arrow: 'shrink-0 text-fog transition-transform group-hover:translate-x-1 group-hover:text-accent',
};

const arrowSize = 14;
const iconSize = 18;

function StopVisual({item}) {
  if (item.thumbnail) {
    return <img src={publicAsset(item.thumbnail)} alt="" loading="lazy" className={styles.thumbnail} />;
  }
  if (item.icon) {
    const Icon = item.icon;
    return <span className={styles.iconBox}><Icon size={iconSize} aria-hidden="true" /></span>;
  }
  return null;
}

function StopIndex({items, columns = 1}) {
  return (
    <ul className={columns === 2 ? styles.listTwoColumns : styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <button type="button" className={styles.item} onClick={() => scrollToSection(item.id)}>
            <StopVisual item={item} />
            <span className={styles.body}>
              <span className={styles.label}>{item.label}</span>
              {item.meta && <span className={styles.meta}>{item.meta}</span>}
            </span>
            <ArrowRight size={arrowSize} className={styles.arrow} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default StopIndex;
