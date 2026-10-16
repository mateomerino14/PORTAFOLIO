import {useEffect, useState} from 'react';

function useRotatingIndex(length, intervalMs) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((previous) => (previous + 1) % length), intervalMs);
    return () => clearInterval(timer);
  }, [length, intervalMs]);

  return index;
}

export default useRotatingIndex;
