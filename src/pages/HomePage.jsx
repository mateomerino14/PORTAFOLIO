import HeroSection from '../features/hero/organisms/HeroSection';

const styles = {
  main: 'relative z-10',
};

function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}

export default HomePage;
