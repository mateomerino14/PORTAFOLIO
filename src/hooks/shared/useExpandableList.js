import {useState} from 'react';

const minimumHidden = 2;

const itemsToShow = (items, visibleCount, isExpanded) => {
  if (isExpanded || items.length - visibleCount < minimumHidden) {
    return items;
  }
  return items.slice(0, visibleCount);
};

function useExpandableList(items, visibleCount) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hiddenCount = items.length - itemsToShow(items, visibleCount, false).length;
  const visibleItems = itemsToShow(items, visibleCount, isExpanded);
  return {
    visibleItems,
    hiddenCount,
    isExpanded,
    canExpand: hiddenCount > 0,
    toggle: () => setIsExpanded((previous) => !previous),
  };
}

export default useExpandableList;
