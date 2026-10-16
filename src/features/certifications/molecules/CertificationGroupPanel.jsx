import CertificationItem from './CertificationItem';
import {GROUP_ICONS} from '../constants/groupIcons';

const styles = {
  header: 'flex items-center gap-3',
  badge: 'grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent',
  title: 'font-display text-2xl font-extrabold md:text-3xl',
  count: 'mt-0.5 font-mono text-xs text-fog',
  list: 'mt-4',
};

const badgeIconSize = 20;

function CertificationGroupPanel({group}) {
  const Icon = GROUP_ICONS[group.group];
  return (
    <article>
      <div className={styles.header}>
        <span className={styles.badge}>
          <Icon size={badgeIconSize} aria-hidden="true" />
        </span>
        <div>
          <h3 className={styles.title}>{group.group}</h3>
          <p className={styles.count}>{group.items.length} certificaciones</p>
        </div>
      </div>
      <ul className={styles.list}>
        {group.items.map((certification) => <CertificationItem key={certification.name} certification={certification} />)}
      </ul>
    </article>
  );
}

export default CertificationGroupPanel;
