import {useState} from 'react';

const firstTab = 0;

function useActiveTab() {
  const [activeTab, setActiveTab] = useState(firstTab);
  return {activeTab, selectTab: setActiveTab};
}

export default useActiveTab;
