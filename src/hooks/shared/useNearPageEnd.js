import {useEffect, useState} from 'react';

function useNearPageEnd(distancePx) {
  const [isNearEnd, setIsNearEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const remaining = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      setIsNearEnd(remaining < distancePx);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [distancePx]);

  return isNearEnd;
}

export default useNearPageEnd;
