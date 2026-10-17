const styles = {
  grid: 'grid grid-cols-3 gap-1.5 sm:gap-2',
  tile: 'min-w-0 rounded-xl border border-line bg-ink-soft px-2 py-2 sm:px-3 sm:py-2.5',
  value: 'block font-display text-base font-extrabold whitespace-nowrap text-paper sm:text-xl md:text-2xl',
  label: 'mt-0.5 block text-[10px] leading-tight wrap-anywhere text-fog sm:text-[11px]',
};

function StatTiles({stats}) {
  return (
    <dl className={styles.grid}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.tile}>
          <dd className={styles.value}>{stat.value}</dd>
          <dt className={styles.label}>{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export default StatTiles;
