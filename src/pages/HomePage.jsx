import HeroSection from '../features/hero/organisms/HeroSection';
import AboutSection from '../features/about/organisms/AboutSection';
import StackSection from '../features/stack/organisms/StackSection';

const styles = {
  main: 'relative z-10',
};

function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <StackSection />
    </main>
  );
}

export default HomePage;
