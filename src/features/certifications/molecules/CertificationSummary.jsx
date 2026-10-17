import TechIcon from '../../../components/ui/TechIcon';
import TechList from '../../../components/ui/TechList';
import ImageGallery from '../../../components/ui/ImageGallery';
import useCertificationSummary from '../hooks/useCertificationSummary';

const styles = {
  wrapper: 'flex flex-col gap-4',
  stats: 'grid grid-cols-3 gap-2',
  stat: 'rounded-xl border border-line bg-ink-soft px-3 py-2.5',
  statValue: 'block font-display text-xl font-extrabold text-paper md:text-2xl',
  statLabel: 'mt-0.5 block font-mono text-[10px] tracking-wider text-fog uppercase',
  sectionTitle: 'mb-2 font-mono text-[11px] tracking-widest text-fog uppercase',
  topics: 'grid grid-cols-3 gap-2 sm:grid-cols-4',
  topic: 'flex flex-col items-center gap-1.5 rounded-xl border border-line bg-ink-soft px-2 py-2.5 text-center',
  topicName: 'text-[11px] leading-tight text-fog',
  bars: 'space-y-1.5',
  barRow: 'grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1',
  barName: 'truncate text-xs text-paper/90',
  barHours: 'font-mono text-[11px] text-signal',
  barTrack: 'col-span-2 h-1.5 overflow-hidden rounded-full bg-line',
  barFill: 'block h-full rounded-full bg-gradient-to-r from-accent to-signal',
  issuers: 'flex flex-wrap gap-2',
  issuer: 'inline-flex items-center gap-2 rounded-full border border-line bg-ink-soft py-1 pr-3 pl-1 text-xs text-fog',
  monogram: 'grid h-6 w-6 place-items-center rounded-full bg-accent/15 font-mono text-[10px] font-semibold text-accent',
};

const topicIconSize = 22;
const monogramLength = 2;
const percent = 100;
const capitalizedWord = /^[A-ZÁÉÍÓÚ]/;

const monogramOf = (name) => name.split(' ').filter((word) => capitalizedWord.test(word)).map((word) => word[0]).join('').slice(0, monogramLength);

function CertificationSummary({group, compact = false, showCertificates = false}) {
  const summary = useCertificationSummary(group, {compact, showCertificates});
  return (
    <div className={styles.wrapper}>
      {summary.hasCertificates && <ImageGallery images={summary.certificates} title={group.group} fit="contain" />}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>{summary.count}</span>
          <span className={styles.statLabel}>Certificados</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{summary.detailStat.value}</span>
          <span className={styles.statLabel}>{summary.detailStat.label}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{summary.period}</span>
          <span className={styles.statLabel}>Periodo</span>
        </div>
      </div>
      <div>
        <p className={styles.sectionTitle}>Temas</p>
        {summary.isCompact && <TechList items={summary.topics} />}
        {!summary.isCompact && (
          <ul className={styles.topics}>
            {summary.topics.map((topic) => (
              <li key={topic} className={styles.topic}>
                <TechIcon name={topic} size={topicIconSize} />
                <span className={styles.topicName}>{topic}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {!summary.isCompact && summary.hourBars.length > 0 && (
        <div>
          <p className={styles.sectionTitle}>Horas por certificado</p>
          <ul className={styles.bars}>
            {summary.hourBars.map((bar) => (
              <li key={bar.name} className={styles.barRow}>
                <span className={styles.barName}>{bar.name}</span>
                <span className={styles.barHours}>{bar.hours} h</span>
                <span className={styles.barTrack}>
                  <span className={styles.barFill} style={{width: `${bar.ratio * percent}%`}} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {summary.issuers.length > 0 && (
        <div>
          <p className={styles.sectionTitle}>Emitidos por</p>
          <ul className={styles.issuers}>
            {summary.issuers.map((issuer) => (
              <li key={issuer} className={styles.issuer}>
                <span className={styles.monogram}>{monogramOf(issuer)}</span>
                {issuer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CertificationSummary;
