import StopIndex from '../../journey/molecules/StopIndex';
import ProjectDialog from './ProjectDialog';
import useOtherProjectIndex from '../hooks/useOtherProjectIndex';
import useProjectDialog from '../hooks/useProjectDialog';
import {OTHER_PROJECTS} from '../../../data/projects';

const styles = {
  title: 'font-display text-2xl leading-tight font-extrabold md:text-3xl',
  intro: 'mt-2 text-fog',
};

const indexColumns = 2;

function OtherProjectsPanel() {
  const items = useOtherProjectIndex();
  const {selectedProject, open, close} = useProjectDialog(OTHER_PROJECTS);
  return (
    <>
      <h3 className={styles.title}>Otros proyectos</h3>
      <p className={styles.intro}>Trabajos de la universidad, en equipo y versiones anteriores. Abre cualquiera para ver sus capturas y enlaces.</p>
      <StopIndex items={items} columns={indexColumns} onSelect={open} />
      <ProjectDialog project={selectedProject} onClose={close} />
    </>
  );
}

export default OtherProjectsPanel;
