const styles = {
  band: 'mt-20 -rotate-2 border-y border-line bg-ink-soft py-5',
  track: 'flex w-max animate-marquee gap-10 font-display text-3xl font-extrabold whitespace-nowrap md:text-5xl',
  solid: 'flex items-center gap-10 text-paper',
  outlined: 'flex items-center gap-10 text-outline',
  separator: 'text-accent',
};

function TechMarquee({items}) {
  const loopedItems = [...items, ...items];
  return (
    <div className={styles.band} aria-hidden>
      <div className={styles.track}>
        {loopedItems.map((item, position) => (
          <span key={position} className={position % 2 === 0 ? styles.solid : styles.outlined}>
            {item}
            <span className={styles.separator}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
