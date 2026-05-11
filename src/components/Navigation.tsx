import React from 'react';
import { CONTROLS } from '../utils/theme';

type TabType = 'SETUP' | 'HOME' | 'GROUPS' | 'MATCHES';

interface Props {
  activeTab: TabType;
  setActiveTab: (t: TabType) => void;
  showSetup?: boolean;
}

export const Navigation: React.FC<Props> = ({ activeTab, setActiveTab, showSetup = true }) => {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'HOME', label: 'Home', icon: '🏠' },
    { id: 'GROUPS', label: 'Groups', icon: '📊' },
    { id: 'MATCHES', label: 'Knockouts', icon: '⚔️' },
  ];

  if (showSetup) {
    tabs.push({ id: 'SETUP', label: 'Setup', icon: '⚙️' });
  }

  return (
    <div className={`flex p-1 rounded-md text-xs font-bold overflow-x-auto hide-scrollbar w-full md:w-auto mt-4 md:mt-0 transition-colors ${CONTROLS.segmented}`}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`shrink-0 flex-1 min-w-[90px] md:flex-none px-3 sm:px-4 py-2 rounded shadow-sm flex justify-center items-center whitespace-nowrap transition-colors
            ${activeTab === tab.id 
              ? 'bg-emerald-500 text-white' 
              : CONTROLS.segmentedIdle}`}
        >
          <span className="mr-1">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
