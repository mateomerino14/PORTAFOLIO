import {MotionConfig} from 'framer-motion';

const styles = {
  app: 'grain relative',
};

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.app}>
      </div>
    </MotionConfig>
  );
}

export default App;
