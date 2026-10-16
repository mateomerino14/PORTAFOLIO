import HeroSection from '../features/hero/organisms/HeroSection';
import AboutSection from '../features/about/organisms/AboutSection';
import StackSection from '../features/stack/organisms/StackSection';
import ProjectsSection from '../features/projects/organisms/ProjectsSection';

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
    </main>
  );
}

export default HomePage;
