import TechIcon from '../../../components/ui/TechIcon';

const styles = {
  row: 'flex items-center gap-3 border-t border-line py-3 first:border-t-0',
  icon: 'grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-ink-raised',
  body: 'min-w-0 flex-1',
  name: 'text-sm leading-snug font-semibold text-paper',
  details: 'mt-0.5 text-xs text-fog',
  aside: 'shrink-0 text-right font-mono text-xs text-fog',
  hours: 'text-signal',
};

const iconSize = 16;
const detailSeparator = ' · ';

function CertificationItem({certification}) {
  const details = [certification.issuer, certification.note].filter(Boolean).join(detailSeparator);
  return (
    <li className={styles.row}>
      <span className={styles.icon}>
        <TechIcon name={certification.tech} size={iconSize} />
      </span>
      <div className={styles.body}>
        <h4 className={styles.name}>{certification.name}</h4>
        {details && <p className={styles.details}>{details}</p>}
      </div>
      <div className={styles.aside}>
        <div>{certification.date}</div>
        {certification.hours > 0 && <div className={styles.hours}>{certification.hours} h</div>}
      </div>
    </li>
  );
}

export default CertificationItem;
