import HeroSection from '../features/hero/organisms/HeroSection';
import AboutSection from '../features/about/organisms/AboutSection';
import StackSection from '../features/stack/organisms/StackSection';
import ProjectsSection from '../features/projects/organisms/ProjectsSection';
import TimelineSection from '../features/timeline/organisms/TimelineSection';

const styles = {
  main: 'relative z-10',
};

function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <TimelineSection />
    </main>
  );
}

export default HomePage;
