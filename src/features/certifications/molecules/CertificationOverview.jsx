import StatTiles from '../../../components/ui/StatTiles';
import useCertificationOverview from '../hooks/useCertificationOverview';

const styles = {
  wrapper: 'flex flex-col gap-5',
  title: 'mb-3 font-mono text-[11px] tracking-widest text-fog uppercase',
  areas: 'flex flex-col gap-3.5',
  header: 'flex items-center gap-2 text-sm',
  icon: 'shrink-0 text-accent',
  name: 'min-w-0 flex-1 truncate text-paper',
  detail: 'shrink-0 font-mono text-[11px] text-fog',
  track: 'mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-raised',
  bar: 'h-full rounded-full bg-gradient-to-r from-accent to-signal',
};

const iconSize = 15;

const detailOf = (area) => {
  if (area.hours > 0) {
    return `${area.count} · ${area.hours} h`;
  }
  return `${area.count}`;
};

function CertificationOverview() {
  const overview = useCertificationOverview();
  return (
    <div className={styles.wrapper}>
      <StatTiles stats={overview.stats} />
      <div>
        <p className={styles.title}>Horas por área</p>
        <ul className={styles.areas}>
          {overview.areas.map((area) => {
            const Icon = area.icon;
            return (
              <li key={area.name}>
                <div className={styles.header}>
                  <Icon size={iconSize} className={styles.icon} aria-hidden="true" />
                  <span className={styles.name}>{area.name}</span>
                  <span className={styles.detail}>{detailOf(area)}</span>
                </div>
                <div className={styles.track}>
                  <div className={styles.bar} style={{width: `${area.share}%`}} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CertificationOverview;
