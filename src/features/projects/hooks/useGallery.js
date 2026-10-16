import {useEffect, useState} from 'react';

const closeKey = 'Escape';

function useGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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
    activeIndex,
    isExpanded,
    select: setActiveIndex,
    expand: () => setIsExpanded(true),
    collapse: () => setIsExpanded(false),
  };
}

export default useGallery;
