import {useEffect} from 'react';
import Lenis from 'lenis';
import {MEDIA_QUERIES} from '../../constants';
import {registerSmoothScroller} from '../../utils/scroll';

const scrollDurationSeconds = 1.15;

const easeOutExpo = (progress) => Math.min(1, 1.001 - Math.pow(2, -10 * progress));

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia(MEDIA_QUERIES.reducedMotion).matches) {
      return;
    }
    const lenis = new Lenis({duration: scrollDurationSeconds, easing: easeOutExpo});
    registerSmoothScroller(lenis);
    let frameId = 0;
    const loop = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      registerSmoothScroller(null);
    };
  }, []);
}

export default useSmoothScroll;
