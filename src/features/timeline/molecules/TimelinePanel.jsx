import {MapPin} from 'lucide-react';
import ImageGallery from '../../../components/ui/ImageGallery';
import TechList from '../../../components/ui/TechList';
import IconList from '../../../components/ui/IconList';
import StopIndex from '../../journey/molecules/StopIndex';
import ProjectPreviewCard from '../../projects/molecules/ProjectPreviewCard';
import {TIMELINE_TYPE_ICONS, TIMELINE_TYPE_LABELS} from '../constants/timelineTypes';

const styles = {
  layout: 'grid grid-cols-[minmax(0,1fr)] gap-6',
  layoutWithAside: 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-8',
  header: 'mb-4 flex items-center gap-3',
  badge: 'grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent',
  meta: 'font-mono text-xs text-fog',
  type: 'block text-accent',
  title: 'font-display text-2xl leading-tight font-extrabold md:text-3xl',
  place: 'mt-1 flex items-center gap-1.5 text-fog',
  points: 'mt-4 list-disc space-y-1.5 pl-5 text-sm text-fog marker:text-signal',
  tags: 'mt-5',
  asideTitle: 'font-mono text-xs tracking-widest text-fog uppercase',
  asideBody: 'mt-4',
};

const badgeIconSize = 20;
const placeIconSize = 14;

function TimelineAside({entry, relatedProjects}) {
  if (entry.photos) {
    return <ImageGallery images={entry.photos} title={entry.title} fit="contain" />;
  }
  if (relatedProjects.length === 1) {
    return (
      <div>
        <p className={styles.asideTitle}>Proyecto de esta etapa</p>
        <div className={styles.asideBody}>
          <ProjectPreviewCard project={relatedProjects[0]} />
        </div>
      </div>
    );
  }
  if (relatedProjects.length > 1) {
    return (
      <div>
        <p className={styles.asideTitle}>Proyectos de esta etapa</p>
        <StopIndex items={relatedProjects} />
      </div>
    );
  }
  if (entry.subjects) {
    return (
      <div>
        <p className={styles.asideTitle}>Materias</p>
        <div className={styles.asideBody}>
          <IconList items={entry.subjects} />
        </div>
      </div>
    );
  }
  return null;
}

function TimelinePanel({entry, relatedProjects = [], hasAside = false}) {
  const Icon = TIMELINE_TYPE_ICONS[entry.type];
  return (
    <article className={hasAside ? styles.layoutWithAside : styles.layout}>
      <div>
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
      </div>
      <TimelineAside entry={entry} relatedProjects={relatedProjects} />
    </article>
  );
}

export default TimelinePanel;
