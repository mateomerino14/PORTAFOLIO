import {lazy, Suspense} from 'react';
import {motion} from 'framer-motion';
import SceneLabels from '../molecules/SceneLabels';
import ErrorBoundary from '../../../components/ui/ErrorBoundary';
import {isWebGLAvailable} from '../../../utils/webgl';
import {useActiveStopIndex, useHoveredTech} from '../../journey/hooks/useJourneyState';

const JourneyScene = lazy(() => import('./JourneyScene'));

const styles = {
  layer: 'pointer-events-none fixed inset-0 z-0',
  frame: 'relative h-full w-full',
  fade: 'absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent md:bg-gradient-to-r md:from-ink/90 md:via-ink/20',
};

const sceneEntrance = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  transition: {duration: 1.6, delay: 0.2},
};

const canRenderScene = isWebGLAvailable();

function SceneBackdrop() {
  const activeIndex = useActiveStopIndex();
  const hoveredTech = useHoveredTech();
  return (
    <div className={styles.layer} aria-hidden>
      {canRenderScene && (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <motion.div className={styles.frame} {...sceneEntrance}>
              <JourneyScene activeIndex={activeIndex} />
              <SceneLabels activeIndex={activeIndex} hoveredTech={hoveredTech} />
            </motion.div>
          </Suspense>
        </ErrorBoundary>
      )}
      <div className={styles.fade} />
    </div>
  );
}

export default SceneBackdrop;
