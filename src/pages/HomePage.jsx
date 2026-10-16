import HeroSection from '../features/hero/organisms/HeroSection';
import AboutSection from '../features/about/organisms/AboutSection';

const styles = {
  main: 'relative z-10',
};

function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
    </main>
  );
}

export default HomePage;
