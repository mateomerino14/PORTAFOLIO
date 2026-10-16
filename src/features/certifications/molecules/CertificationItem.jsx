const styles = {
  row: 'flex items-start justify-between gap-4 border-t border-line py-3 first:border-t-0',
  name: 'text-sm leading-snug font-semibold text-paper',
  details: 'mt-0.5 text-xs text-fog',
  aside: 'shrink-0 text-right font-mono text-xs text-fog',
  hours: 'text-signal',
};

const detailSeparator = ' · ';

function CertificationItem({certification}) {
  const details = [certification.issuer, certification.note].filter(Boolean).join(detailSeparator);
  return (
    <li className={styles.row}>
      <div>
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
