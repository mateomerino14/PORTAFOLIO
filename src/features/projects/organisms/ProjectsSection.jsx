import {ArrowUpRight} from 'lucide-react';
import Section from '../../../components/ui/Section';
import SectionTitle from '../../../components/ui/SectionTitle';
import Reveal from '../../../components/ui/Reveal';
import ProjectCard from './ProjectCard';
import {SECTION_IDS} from '../../../constants/navigation';
import {PROJECTS} from '../../../data/projects';
import {PROFILE} from '../../../data/profile';

const styles = {
  list: 'relative',
  moreLink: 'mt-10 inline-flex items-center gap-1.5 font-mono text-sm text-fog transition-colors hover:text-accent',
};

const iconSize = 16;

function ProjectsSection() {
  return (
    <Section id={SECTION_IDS.projects}>
      <SectionTitle index="03" kicker="Proyectos" title="Cosas que he construido." />
      <div className={styles.list}>
        {PROJECTS.map((project, position) => <ProjectCard key={project.title} project={project} position={position} />)}
      </div>
      <Reveal>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className={styles.moreLink}>
          Más en {PROFILE.githubLabel}
          <ArrowUpRight size={iconSize} />
        </a>
      </Reveal>
    </Section>
  );
}

export default ProjectsSection;
