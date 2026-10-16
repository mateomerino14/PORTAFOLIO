import {ArrowRight} from 'lucide-react';
import {scrollToSection} from '../../../utils/scroll';
import {publicAsset} from '../../../utils/assets';

const styles = {
  card: 'group block w-full cursor-pointer overflow-hidden rounded-xl border border-line bg-ink-soft text-left transition-colors hover:border-accent/60',
  image: 'aspect-[16/10] w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100',
  footer: 'flex items-center justify-between gap-3 border-t border-line px-4 py-3',
  label: 'block text-sm font-semibold text-paper',
  meta: 'mt-0.5 block font-mono text-[11px] text-fog',
  arrow: 'shrink-0 text-fog transition-transform group-hover:translate-x-1 group-hover:text-accent',
};

const arrowSize = 16;

function ProjectPreviewCard({project}) {
  return (
    <button type="button" className={styles.card} onClick={() => scrollToSection(project.id)}>
      {project.thumbnail && <img src={publicAsset(project.thumbnail)} alt="" loading="lazy" className={styles.image} />}
      <span className={styles.footer}>
        <span>
          <span className={styles.label}>{project.label}</span>
          <span className={styles.meta}>{project.meta}</span>
        </span>
        <ArrowRight size={arrowSize} className={styles.arrow} />
      </span>
    </button>
  );
}

export default ProjectPreviewCard;
