import {ArrowRight, ChevronRight} from 'lucide-react';
import TechList from '../../../components/ui/TechList';
import {scrollToSection} from '../../../utils/scroll';

const styles = {
  card: 'group block w-full cursor-pointer rounded-xl border border-line bg-ink-soft p-5 text-left transition-colors hover:border-accent/60',
  header: 'flex items-start justify-between gap-3',
  label: 'block font-display text-lg font-extrabold text-paper',
  meta: 'mt-0.5 block font-mono text-[11px] text-fog',
  arrow: 'mt-1 shrink-0 text-fog transition-transform group-hover:translate-x-1 group-hover:text-accent',
  highlights: 'mt-4 space-y-2 text-sm text-fog',
  highlight: 'flex items-start gap-2',
  bullet: 'mt-0.5 shrink-0 text-signal',
  tags: 'mt-4',
};

const arrowSize = 16;
const bulletSize = 16;

function ProjectPreviewCard({project}) {
  return (
    <button type="button" className={styles.card} onClick={() => scrollToSection(project.id)}>
      <span className={styles.header}>
        <span>
          <span className={styles.label}>{project.label}</span>
          <span className={styles.meta}>{project.meta}</span>
        </span>
        <ArrowRight size={arrowSize} className={styles.arrow} />
      </span>
      <span className={styles.highlights}>
        {project.highlights.map((highlight) => (
          <span key={highlight} className={styles.highlight}>
            <ChevronRight size={bulletSize} className={styles.bullet} />
            {highlight}
          </span>
        ))}
      </span>
      <TechList items={project.tags} className={styles.tags} />
    </button>
  );
}

export default ProjectPreviewCard;
