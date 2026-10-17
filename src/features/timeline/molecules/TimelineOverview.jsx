const styles = {
  wrapper: 'grid grid-cols-[minmax(0,1fr)] gap-3',
  chart: 'rounded-xl border border-line bg-ink-soft p-4',
  chartTitle: 'mb-3 font-mono text-[11px] tracking-widest text-fog uppercase',
  rows: 'space-y-2.5',
  row: 'grid grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)] items-center gap-3',
  rowLabel: 'truncate text-[11px] text-fog',
  track: 'relative h-2.5 rounded-full bg-line/60',
  bar: 'absolute top-0 h-full rounded-full',
  point: 'absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3px] bg-paper shadow-[0_0_10px] shadow-paper/50',
  axis: 'relative mt-3 ml-[calc(7.5rem+0.75rem)] h-4 border-t border-line',
  tick: 'absolute top-1 -translate-x-1/2 font-mono text-[10px] text-fog',
  stats: 'grid grid-cols-3 gap-2',
  stat: 'rounded-xl border border-line bg-ink-soft px-3 py-2.5',
  statValue: 'block font-display text-xl font-extrabold text-paper md:text-2xl',
  statLabel: 'mt-0.5 block font-mono text-[10px] tracking-wider text-fog uppercase',
};

const barColors = {
  freelance: 'bg-accent',
  internship: 'bg-accent',
  work: 'bg-signal',
  education: 'bg-gradient-to-r from-signal/60 to-signal',
};

function TimelineOverview({overview}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.chart}>
        <p className={styles.chartTitle}>Línea de tiempo</p>
        <ul className={styles.rows}>
          {overview.rows.map((row) => (
            <li key={row.title} className={styles.row}>
              <span className={styles.rowLabel}>{row.title}</span>
              <span className={styles.track}>
                {row.isPoint && <span className={styles.point} style={{left: `${row.left}%`}} />}
                {!row.isPoint && <span className={`${styles.bar} ${barColors[row.type]}`} style={{left: `${row.left}%`, width: `${row.width}%`}} />}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.axis}>
          {overview.years.map((tick) => (
            <span key={tick.year} className={styles.tick} style={{left: `${tick.offset}%`}}>{tick.year}</span>
          ))}
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>{overview.stages}</span>
          <span className={styles.statLabel}>Etapas</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{overview.since}</span>
          <span className={styles.statLabel}>Desde</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{overview.awards}</span>
          <span className={styles.statLabel}>Premios</span>
        </div>
      </div>
    </div>
  );
}

export default TimelineOverview;
