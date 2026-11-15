import {ArrowUpRight, Layers} from 'lucide-react';
import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StopIndex from '../../journey/molecules/StopIndex';
import ProjectPanel from '../molecules/ProjectPanel';
import OtherProjectsPanel from '../molecules/OtherProjectsPanel';
import useProjectIndex from '../hooks/useProjectIndex';
import {SECTION_IDS} from '../../../constants/navigation';
import {FEATURED_PROJECTS, OTHER_PROJECTS} from '../../../data/projects';
import {PROFILE} from '../../../data/profile';

const styles = {
  intro: 'text-fog',
  moreLink: 'mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-fog transition-colors hover:text-accent',
};

const iconSize = 14;
const indexColumns = 2;

const otherProjectsEntry = {
  id: SECTION_IDS.otherProjects,
  label: 'Otros proyectos',
  meta: `${OTHER_PROJECTS.length} proyectos más de la universidad y en equipo`,
  icon: Layers,
};

function ProjectsSection() {
  const projectStops = useProjectIndex();
  return (
    <>
      <StopPanel stopId={SECTION_IDS.projects} size="compact" variant="wide">
        <SectionTitle title="Proyectos" />
        <p className={styles.intro}>Los más importantes: trabajos para clientes, mi pasantía, mi proyecto de grado y proyectos propios.</p>
        <StopIndex items={[...projectStops, otherProjectsEntry]} columns={indexColumns} />
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className={styles.moreLink}>
          Más en {PROFILE.githubLabel}
          <ArrowUpRight size={iconSize} />
        </a>
      </StopPanel>
      {projectStops.map((stop) => (
        <StopPanel key={stop.id} stopId={stop.id} variant="wide">
          <ProjectPanel project={FEATURED_PROJECTS[stop.itemIndex]} />
        </StopPanel>
      ))}
      <StopPanel stopId={SECTION_IDS.otherProjects} size="compact" variant="wide">
        <OtherProjectsPanel />
      </StopPanel>
    </>
  );
}

export default ProjectsSection;
