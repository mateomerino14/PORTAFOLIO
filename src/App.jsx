import {MotionConfig} from 'framer-motion';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/Footer';
import JourneyMap from './layouts/effects/JourneyMap';
import HomePage from './pages/HomePage';
import SceneBackdrop from './features/scene/organisms/SceneBackdrop';
import useSmoothScroll from './hooks/shared/useSmoothScroll';

const styles = {
  app: 'grain relative',
};

function App() {
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.app}>
        <SceneBackdrop />
        <JourneyMap />
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
