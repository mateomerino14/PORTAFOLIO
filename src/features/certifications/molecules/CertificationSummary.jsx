import TechIcon from '../../../components/ui/TechIcon';
import StatTiles from '../../../components/ui/StatTiles';
import useCertificationSummary from '../hooks/useCertificationSummary';

const styles = {
  wrapper: 'flex flex-col gap-4',
  topics: 'grid grid-cols-3 gap-2 sm:grid-cols-4',
  topic: 'flex flex-col items-center gap-1.5 rounded-xl border border-line bg-ink-soft px-2 py-2.5 text-center',
  topicName: 'text-[11px] leading-tight text-fog',
};

const topicIconSize = 22;

function CertificationSummary({group}) {
  const summary = useCertificationSummary(group);
  return (
    <div className={styles.wrapper}>
      <StatTiles stats={summary.stats} />
      <ul className={styles.topics}>
        {summary.topics.map((topic) => (
          <li key={topic} className={styles.topic}>
            <TechIcon name={topic} size={topicIconSize} />
            <span className={styles.topicName}>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CertificationSummary;
