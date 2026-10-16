import {MotionConfig} from 'framer-motion';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/Footer';
import useSmoothScroll from './hooks/shared/useSmoothScroll';

const styles = {
  app: 'grain relative',
};

function App() {
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.app}>
        <Navbar />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
