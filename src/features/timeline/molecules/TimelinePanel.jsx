import {MapPin} from 'lucide-react';
import ImageGallery from '../../../components/ui/ImageGallery';
import TechList from '../../../components/ui/TechList';
import ArchitectureDiagram from '../../../components/ui/ArchitectureDiagram';
import StopIndex from '../../journey/molecules/StopIndex';
import {TIMELINE_TYPE_ICONS, TIMELINE_TYPE_LABELS} from '../constants/timelineTypes';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-6',
  layoutWithAside: 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-stretch md:gap-8',
  content: 'flex flex-col justify-center',
  header: 'mb-4 flex items-center gap-3',
  badge: 'grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent',
  meta: 'font-mono text-xs text-fog',
  type: 'block text-accent',
  title: 'font-display text-2xl leading-tight font-extrabold md:text-3xl',
  place: 'mt-1 flex items-center gap-1.5 text-fog',
  points: 'mt-4 list-disc space-y-1.5 pl-5 text-sm text-fog marker:text-signal',
  tags: 'mt-5',
  projects: 'mt-6',
  asideTitle: 'font-mono text-xs tracking-widest text-fog uppercase',
  aside: 'flex flex-col justify-center gap-4',
};

const badgeIconSize = 20;
const placeIconSize = 14;
const projectColumns = {single: 1, double: 2};

const columnsFor = (hasAside) => {
  if (hasAside) {
    return projectColumns.single;
  }
  return projectColumns.double;
};

function RelatedProjects({projects, columns}) {
  if (projects.length === 0) {
    return null;
  }
  return (
    <div className={styles.projects}>
      <p className={styles.asideTitle}>Proyectos de esta etapa</p>
      <StopIndex items={projects} columns={columns} />
    </div>
  );
}

function TimelineAside({entry, relatedProjects}) {
  return (
    <div className={styles.aside}>
      {entry.photos && <ImageGallery images={entry.photos} title={entry.title} fit="fill" />}
      {entry.architecture && <ArchitectureDiagram title={entry.architecture.title} layers={entry.architecture.layers} />}
      {entry.architecture && <StopIndex items={relatedProjects} />}
    </div>
  );
}

function TimelinePanel({entry, relatedProjects = [], hasAside = false}) {
  const Icon = TIMELINE_TYPE_ICONS[entry.type];
  const showProjectsInContent = !entry.architecture;
  const columns = columnsFor(hasAside);
  return (
    <article className={hasAside ? styles.layoutWithAside : styles.layout}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.badge}>
            <Icon size={badgeIconSize} aria-hidden="true" />
          </span>
          <p className={styles.meta}>
            <span className={styles.type}>{TIMELINE_TYPE_LABELS[entry.type]}</span>
            {entry.period}
          </p>
        </div>
        <h3 className={styles.title}>{entry.title}</h3>
        <p className={styles.place}>
          <MapPin size={placeIconSize} aria-hidden="true" />
          {entry.place}
        </p>
        <ul className={styles.points}>
          {entry.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        {entry.tags && <TechList items={entry.tags} className={styles.tags} />}
        {showProjectsInContent && <RelatedProjects projects={relatedProjects} columns={columns} />}
      </div>
      {hasAside && <TimelineAside entry={entry} relatedProjects={relatedProjects} />}
    </article>
  );
}

export default TimelinePanel;
