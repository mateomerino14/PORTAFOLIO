import {MotionConfig} from 'framer-motion';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/Footer';
import ScrollProgress from './layouts/effects/ScrollProgress';
import CursorGlow from './layouts/effects/CursorGlow';
import HomePage from './pages/HomePage';
import useSmoothScroll from './hooks/shared/useSmoothScroll';

const styles = {
  app: 'grain relative',
};

function App() {
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.app}>
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
