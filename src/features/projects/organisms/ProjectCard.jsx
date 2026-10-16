import {motion} from 'framer-motion';
import {ChevronRight} from 'lucide-react';
import TechList from '../../../components/ui/TechList';
import ProjectVisual from '../molecules/ProjectVisual';
import ProjectLink from '../atoms/ProjectLink';
import useStackedCard from '../hooks/useStackedCard';
import {PROJECT_ACCENTS} from '../constants/projectAccents';

const styles = {
  sticky: 'md:sticky',
  card: 'mb-6 grid gap-6 rounded-3xl border border-line bg-ink-soft p-4 shadow-2xl shadow-black/50 md:grid-cols-2 md:p-6',
  body: 'flex flex-col p-2 md:p-4',
  meta: 'mb-4 flex items-center gap-3 font-mono text-xs text-fog',
  divider: 'h-px w-6 bg-line',
  title: 'font-display text-3xl leading-tight font-extrabold md:text-4xl',
  description: 'mt-4 leading-relaxed text-fog',
  highlights: 'mt-5 space-y-2 text-sm',
  highlight: 'flex items-start gap-2',
  bullet: 'mt-0.5 shrink-0',
  tags: 'mt-6',
  links: 'mt-auto flex gap-5 pt-8 text-sm font-semibold',
};

const stickyTopPx = 110;
const stickyStepPx = 28;
const bulletSize = 16;

function ProjectCard({project, position}) {
  const {cardRef, scale} = useStackedCard();
  const accent = PROJECT_ACCENTS[project.accent];
  return (
    <div ref={cardRef} className={styles.sticky} style={{top: `${stickyTopPx + position * stickyStepPx}px`}}>
      <motion.article className={styles.card} style={{scale}}>
        <ProjectVisual kind={project.kind} accent={accent} position={position} />
        <div className={styles.body}>
          <div className={styles.meta}>
            <span className={accent.text}>{project.context}</span>
            <span className={styles.divider} />
            {project.kind}
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <ul className={styles.highlights}>
            {project.highlights.map((highlight) => (
              <li key={highlight} className={styles.highlight}>
                <ChevronRight size={bulletSize} className={`${styles.bullet} ${accent.text}`} />
                {highlight}
              </li>
            ))}
          </ul>
          <TechList items={project.tags} className={styles.tags} />
          <div className={styles.links}>
            {project.links.map((link) => <ProjectLink key={link.href} href={link.href} label={link.label} />)}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default ProjectCard;
