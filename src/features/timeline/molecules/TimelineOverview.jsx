import {Trophy} from 'lucide-react';
import {publicAsset} from '../../../utils/assets';

const styles = {
  wrapper: 'grid grid-cols-[minmax(0,1fr)] gap-3',
  figure: 'relative overflow-hidden rounded-xl border border-line',
  image: 'aspect-[4/3] w-full object-cover object-[50%_30%]',
  caption: 'absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-ink via-ink/80 to-transparent px-4 pt-10 pb-3',
  captionIcon: 'shrink-0 text-accent',
  captionTitle: 'block text-sm font-semibold text-paper',
  captionMeta: 'block font-mono text-[11px] text-fog',
  stats: 'grid grid-cols-3 gap-2',
  stat: 'rounded-xl border border-line bg-ink-soft px-3 py-2.5',
  statValue: 'block font-display text-xl font-extrabold text-paper md:text-2xl',
  statLabel: 'mt-0.5 block font-mono text-[10px] tracking-wider text-fog uppercase',
};

const captionIconSize = 18;

function TimelineOverview({overview}) {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.figure}>
        <img src={publicAsset(overview.featured.image.src)} alt={overview.featured.image.caption} loading="lazy" className={styles.image} />
        <figcaption className={styles.caption}>
          <Trophy size={captionIconSize} className={styles.captionIcon} aria-hidden="true" />
          <span>
            <span className={styles.captionTitle}>{overview.featured.title}</span>
            <span className={styles.captionMeta}>{overview.featured.period}</span>
          </span>
        </figcaption>
      </figure>
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
