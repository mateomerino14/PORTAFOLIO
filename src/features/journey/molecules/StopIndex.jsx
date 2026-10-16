import {ArrowRight} from 'lucide-react';
import {scrollToSection} from '../../../utils/scroll';

const styles = {
  list: 'mt-4 border-t border-line',
  item: 'group flex w-full cursor-pointer items-center justify-between gap-4 border-b border-line py-2.5 text-left text-sm text-fog transition-colors hover:text-paper',
  icon: 'shrink-0 transition-transform group-hover:translate-x-1',
};

const iconSize = 14;

function StopIndex({items}) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <button type="button" className={styles.item} onClick={() => scrollToSection(item.id)}>
            {item.label}
            <ArrowRight size={iconSize} className={styles.icon} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default StopIndex;
