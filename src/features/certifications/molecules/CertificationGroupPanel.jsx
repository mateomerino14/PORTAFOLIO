import CertificationItem from './CertificationItem';
import CertificationSummary from './CertificationSummary';
import {GROUP_ICONS} from '../constants/groupIcons';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:gap-8',
  header: 'flex items-center gap-3',
  badge: 'grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent',
  title: 'font-display text-2xl font-extrabold md:text-3xl',
  count: 'mt-0.5 font-mono text-xs text-fog',
  list: 'mt-4 md:max-h-[28rem] md:overflow-y-auto md:pr-2',
};

const badgeIconSize = 20;

function CertificationGroupPanel({group}) {
  const Icon = GROUP_ICONS[group.group];
  return (
    <article className={styles.layout}>
      <div>
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
      </div>
      <CertificationSummary group={group} />
    </article>
  );
}

export default CertificationGroupPanel;
