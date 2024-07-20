import { useState } from 'react';

const useTab = (initialTab, allTabs) => {
  const [initialIndex, setInitialIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[initialIndex],
    changeItem: setInitialIndex,
  };
};
export default useTab;
