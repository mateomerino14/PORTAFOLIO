import {MotionConfig} from 'framer-motion';
import useSmoothScroll from './hooks/shared/useSmoothScroll';

const styles = {
  app: 'grain relative',
};

function App() {
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.app}>
      </div>
    </MotionConfig>
  );
}

export default App;
