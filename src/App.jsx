import {MotionConfig} from 'framer-motion';
import Navbar from './layouts/navbar/Navbar';
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
      </div>
    </MotionConfig>
  );
}

export default App;
