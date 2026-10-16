import HeroSection from '../features/hero/organisms/HeroSection';
import AboutSection from '../features/about/organisms/AboutSection';
import StackSection from '../features/stack/organisms/StackSection';
import ProjectsSection from '../features/projects/organisms/ProjectsSection';
import TimelineSection from '../features/timeline/organisms/TimelineSection';
import CertificationsSection from '../features/certifications/organisms/CertificationsSection';
import ContactSection from '../features/contact/organisms/ContactSection';
import useJourneyScroll from '../features/journey/hooks/useJourneyScroll';

const styles = {
  main: 'relative z-10',
};

function HomePage() {
  useJourneyScroll();
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <TimelineSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
