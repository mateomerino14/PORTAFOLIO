import {useEffect, useState} from 'react';

function useScrolledPast(thresholdPx) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > thresholdPx);
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [thresholdPx]);

  return isScrolled;
}

export default useScrolledPast;
