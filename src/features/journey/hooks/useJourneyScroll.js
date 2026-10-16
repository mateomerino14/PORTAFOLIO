import {useEffect} from 'react';
import {journeyStore} from '../store/journeyStore';
import {computeProgress} from '../../../utils/journey';

const stopSelector = '[data-stop]';

const measureCenters = () => Array.from(document.querySelectorAll(stopSelector)).map((element) => {
  const bounds = element.getBoundingClientRect();
  return bounds.top + window.scrollY + bounds.height / 2;
});

function useJourneyScroll() {
  useEffect(() => {
    let centers = measureCenters();
    const update = () => {
      journeyStore.setProgress(computeProgress(centers, window.scrollY + window.innerHeight / 2));
    };
    const remeasure = () => {
      centers = measureCenters();
      update();
    };
    const resizeObserver = new ResizeObserver(remeasure);
    resizeObserver.observe(document.body);
    window.addEventListener('scroll', update, {passive: true});
    update();
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, []);
}

export default useJourneyScroll;
