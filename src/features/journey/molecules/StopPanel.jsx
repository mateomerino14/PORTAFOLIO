import Reveal from '../../../components/ui/Reveal';
import {JOURNEY_STOPS} from '../constants/journeyStops';
import {findStopIndex} from '../../../utils/journey';

const styles = {
  full: 'relative flex min-h-[100svh] items-end pb-10 md:items-center md:pb-0',
  compact: 'relative flex min-h-[80svh] items-end pb-10 md:items-center md:pb-0',
  container: 'mx-auto w-full max-w-6xl pr-10 pl-5 md:px-6',
  panel: 'max-w-xl rounded-2xl border border-line bg-ink/85 p-5 backdrop-blur-md md:p-8',
  bare: 'max-w-2xl',
};

function StopPanel({stopId, size = 'full', variant = 'panel', children}) {
  const stopIndex = findStopIndex(JOURNEY_STOPS, stopId);
  return (
    <section id={stopId} data-stop={stopIndex} className={styles[size]}>
      <div className={styles.container}>
        <Reveal className={styles[variant]}>{children}</Reveal>
      </div>
    </section>
  );
}

export default StopPanel;
