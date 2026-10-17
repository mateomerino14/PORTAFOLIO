import TechIcon from '../../../components/ui/TechIcon';
import TechList from '../../../components/ui/TechList';
import ImageGallery from '../../../components/ui/ImageGallery';
import StatTiles from '../../../components/ui/StatTiles';
import useCertificationSummary from '../hooks/useCertificationSummary';

const styles = {
  wrapper: 'flex flex-col gap-4',
  sectionTitle: 'mb-2 font-mono text-[11px] tracking-widest text-fog uppercase',
  topics: 'grid grid-cols-3 gap-2 sm:grid-cols-4',
  topic: 'flex flex-col items-center gap-1.5 rounded-xl border border-line bg-ink-soft px-2 py-2.5 text-center',
  topicName: 'text-[11px] leading-tight text-fog',
  issuers: 'flex flex-wrap gap-2',
  issuer: 'inline-flex items-center gap-2 rounded-full border border-line bg-ink-soft py-1 pr-3 pl-1 text-xs text-fog',
  monogram: 'grid h-6 w-6 place-items-center rounded-full bg-accent/15 font-mono text-[10px] font-semibold text-accent',
};

const topicIconSize = 22;
const monogramLength = 2;
const capitalizedWord = /^[A-ZÁÉÍÓÚ]/;

const monogramOf = (name) => name.split(' ').filter((word) => capitalizedWord.test(word)).map((word) => word[0]).join('').slice(0, monogramLength);

function CertificationSummary({group, overview = false}) {
  const summary = useCertificationSummary(group, overview);
  return (
    <div className={styles.wrapper}>
      {summary.hasCertificates && <ImageGallery images={summary.certificates} title={group.group} fit="contain" />}
      <StatTiles stats={summary.stats} />
      {summary.showTopicTiles && (
        <ul className={styles.topics}>
          {summary.topics.map((topic) => (
            <li key={topic} className={styles.topic}>
              <TechIcon name={topic} size={topicIconSize} />
              <span className={styles.topicName}>{topic}</span>
            </li>
          ))}
        </ul>
      )}
      {summary.showTopicTags && (
        <div>
          <p className={styles.sectionTitle}>Temas</p>
          <TechList items={summary.topics} />
        </div>
      )}
      {summary.showIssuers && (
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
