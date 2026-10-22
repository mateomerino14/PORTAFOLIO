import CertificationItem from './CertificationItem';
import CertificationSummary from './CertificationSummary';
import ImageGallery from '../../../components/ui/ImageGallery';
import StatTiles from '../../../components/ui/StatTiles';
import useCertificationSummary from '../hooks/useCertificationSummary';
import {GROUP_ICONS} from '../constants/groupIcons';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-stretch md:gap-8',
  content: 'flex flex-col justify-center',
  header: 'flex items-center gap-3',
  badge: 'grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent',
  title: 'font-display text-2xl font-extrabold md:text-3xl',
  count: 'mt-0.5 font-mono text-xs text-fog',
  list: 'mt-4 md:max-h-[24rem] md:overflow-y-auto md:pr-2',
  stats: 'mt-5',
  aside: 'flex flex-col justify-center',
};

const badgeIconSize = 20;

function GroupAside({group, summary}) {
  if (summary.hasCertificates) {
    return <ImageGallery images={summary.certificates} title={group.group} fit="fill" />;
  }
  return <CertificationSummary group={group} />;
}

function CertificationGroupPanel({group}) {
  const Icon = GROUP_ICONS[group.group];
  const summary = useCertificationSummary(group, false);
  return (
    <article className={styles.layout}>
      <div className={styles.content}>
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
        {summary.hasCertificates && <div className={styles.stats}><StatTiles stats={summary.stats} /></div>}
      </div>
      <div className={styles.aside}>
        <GroupAside group={group} summary={summary} />
      </div>
    </article>
  );
}

export default CertificationGroupPanel;
