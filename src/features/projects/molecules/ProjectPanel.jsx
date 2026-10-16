import {ChevronRight} from 'lucide-react';
import TechList from '../../../components/ui/TechList';
import ProjectLink from '../atoms/ProjectLink';
import ProjectGallery from './ProjectGallery';
import CodePreview from './CodePreview';
import {MEDIA_TYPES} from '../../../data/projects';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-start md:gap-8',
  media: 'md:sticky md:top-24',
  meta: 'mb-3 font-mono text-xs text-fog',
  context: 'text-accent',
  title: 'font-display text-2xl leading-tight font-extrabold md:text-3xl',
  description: 'mt-3 leading-relaxed text-fog',
  highlights: 'mt-4 space-y-2 text-sm',
  highlight: 'flex items-start gap-2',
  bullet: 'mt-0.5 shrink-0 text-signal',
  tags: 'mt-5',
  links: 'mt-6 flex flex-wrap gap-5 text-sm font-semibold',
};

const bulletSize = 16;
const metaSeparator = ' · ';

function ProjectPanel({project}) {
  return (
    <article className={styles.layout}>
      <div>
        <p className={styles.meta}>
          <span className={styles.context}>{project.context}</span>
          {metaSeparator}
          {project.kind}
        </p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.highlights}>
          {project.highlights.map((highlight) => (
            <li key={highlight} className={styles.highlight}>
              <ChevronRight size={bulletSize} className={styles.bullet} />
              {highlight}
            </li>
          ))}
        </ul>
        <TechList items={project.tags} className={styles.tags} />
        <div className={styles.links}>
          {project.links.map((link) => <ProjectLink key={link.href} href={link.href} label={link.label} />)}
        </div>
      </div>
      <div className={styles.media}>
        {project.media.type === MEDIA_TYPES.gallery && <ProjectGallery images={project.media.images} note={project.media.note} title={project.title} />}
        {project.media.type === MEDIA_TYPES.code && <CodePreview file={project.media.file} language={project.media.language} code={project.media.code} />}
      </div>
    </article>
  );
}

export default ProjectPanel;
