import {motion} from 'framer-motion';
import {Check} from 'lucide-react';

const styles = {
  card: 'group flex items-start gap-4 rounded-2xl border border-line bg-ink-soft p-5 transition-colors hover:border-violet/60',
  icon: 'mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink-raised text-lime transition-transform group-hover:scale-110',
  body: 'flex-1',
  name: 'leading-snug font-semibold',
  details: 'mt-1 text-sm text-fog',
  aside: 'text-right font-mono text-xs text-fog',
  hours: 'text-violet',
};

const iconSize = 16;
const cardVariants = {hidden: {opacity: 0, y: 16}, visible: {opacity: 1, y: 0}};

function CertificationCard({certification}) {
  const details = [certification.issuer, certification.note].filter(Boolean).join(' · ');
  return (
    <motion.div className={styles.card} variants={cardVariants}>
      <span className={styles.icon}><Check size={iconSize} /></span>
      <div className={styles.body}>
        <h3 className={styles.name}>{certification.name}</h3>
        {details && <p className={styles.details}>{details}</p>}
      </div>
      <div className={styles.aside}>
        <div>{certification.date}</div>
        {certification.hours > 0 && <div className={styles.hours}>{certification.hours}h</div>}
      </div>
    </motion.div>
  );
}

export default CertificationCard;
