import {useEffect, useState} from 'react';
import {lockPageScroll, unlockPageScroll} from '../../../utils/scroll';

const closeKey = 'Escape';

function useProjectDialog(projects) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleKeyDown = (event) => {
      if (event.key === closeKey) {
        setSelectedIndex(null);
      }
    };
    lockPageScroll();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      unlockPageScroll();
    };
  }, [isOpen]);

  return {
    selectedProject: projects[selectedIndex] ?? null,
    open: (item) => setSelectedIndex(item.itemIndex),
    close: () => setSelectedIndex(null),
  };
}

export default useProjectDialog;
