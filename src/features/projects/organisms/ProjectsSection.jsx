import {ArrowUpRight} from 'lucide-react';
import SectionTitle from '../../../components/ui/SectionTitle';
import StopPanel from '../../journey/molecules/StopPanel';
import StopIndex from '../../journey/molecules/StopIndex';
import ProjectPanel from '../molecules/ProjectPanel';
import useProjectIndex from '../hooks/useProjectIndex';
import {SECTION_IDS} from '../../../constants/navigation';
import {PROJECTS} from '../../../data/projects';
import {PROFILE} from '../../../data/profile';

const styles = {
  intro: 'text-fog',
  moreLink: 'mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-fog transition-colors hover:text-accent',
};

const iconSize = 14;
const indexColumns = 2;

function ProjectsSection() {
  const projectStops = useProjectIndex();
  return (
    <>
      <StopPanel stopId={SECTION_IDS.projects} size="compact" variant="wide">
        <SectionTitle title="Proyectos" />
        <p className={styles.intro}>Trabajos para clientes, mi pasantía, la universidad y proyectos en equipo.</p>
        <StopIndex items={projectStops} columns={indexColumns} />
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className={styles.moreLink}>
          Más en {PROFILE.githubLabel}
          <ArrowUpRight size={iconSize} />
        </a>
      </StopPanel>
      {projectStops.map((stop) => (
        <StopPanel key={stop.id} stopId={stop.id} variant="wide">
          <ProjectPanel project={PROJECTS[stop.itemIndex]} />
        </StopPanel>
      ))}
    </>
  );
}

export default ProjectsSection;
