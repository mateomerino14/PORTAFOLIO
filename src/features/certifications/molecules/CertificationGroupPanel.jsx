import CertificationItem from './CertificationItem';

const styles = {
  title: 'font-display text-2xl font-extrabold md:text-3xl',
  count: 'mt-1 font-mono text-xs text-fog',
  list: 'mt-4',
};

function CertificationGroupPanel({group}) {
  return (
    <article>
      <h3 className={styles.title}>{group.group}</h3>
      <p className={styles.count}>{group.items.length} certificaciones</p>
      <ul className={styles.list}>
        {group.items.map((certification) => <CertificationItem key={certification.name} certification={certification} />)}
      </ul>
    </article>
  );
}

export default CertificationGroupPanel;
