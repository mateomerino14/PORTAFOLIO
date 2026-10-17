import {useEffect, useRef, useState} from 'react';
import useMediaQuery from './useMediaQuery';

const closeKey = 'Escape';
const autoplayMs = 5000;
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const visibilityThreshold = 0.4;

function useGallery(count) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useMediaQuery(reducedMotionQuery);
  const isPlaying = count > 1 && isVisible && !isPaused && !isExpanded && !prefersReducedMotion;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {threshold: visibilityThreshold});
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const timer = setTimeout(() => setActiveIndex((index) => (index + 1) % count), autoplayMs);
    return () => clearTimeout(timer);
  }, [isPlaying, activeIndex, count]);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }
    const handleKeyDown = (event) => {
      if (event.key === closeKey) {
        setIsExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  return {
    containerRef,
    activeIndex,
    isExpanded,
    isPlaying,
    autoplayMs,
    select: setActiveIndex,
    expand: () => setIsExpanded(true),
    collapse: () => setIsExpanded(false),
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
  };
}

export default useGallery;
