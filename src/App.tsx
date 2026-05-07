import React, { useState } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { SetupTab } from './components/SetupTab';
import { HomeTab } from './components/HomeTab';
import { GroupsTab } from './components/GroupsTab';
import { MatchesTab } from './components/MatchesTab';
import { Settings, X } from 'lucide-react';

type TabType = 'SETUP' | 'HOME' | 'GROUPS' | 'MATCHES';

function MainApp() {
  const [activeTab, setActiveTab] = useState<TabType>('HOME');
  const [targetGroup, setTargetGroup] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const { tournamentId, setTournamentId, settings, updateSettings, matches, setMatches } = useAppContext();

  // Get the display year based on tournamentId
  const getTournamentYear = () => {
    switch(tournamentId) {
      case 'WC26': return '2026';
      case 'EURO28': return '2028';
      case 'WC22': return '2022';
      case 'EURO20': return '2020';
      case 'WC18': return '2018';
      default: return '';
    }
  };

  const getTournamentName = () => {
    if (tournamentId.startsWith('WC')) return `WORLD CUP ${getTournamentYear()}`;
    if (tournamentId.startsWith('EURO')) return `EURO ${getTournamentYear()}`;
    return '';
  };

  const handleSimulateSteps = (count: number) => {
    // Sort matches by date to ensure proper timeline
    const sortedMatches = [...matches].sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    // Determine the split point
    const toSimulate = sortedMatches.slice(0, count);
    const toClear = sortedMatches.slice(count);

    // Create a new match array 
    setMatches(prevMatches => {
       return prevMatches.map(m => {
          const wouldSimulate = toSimulate.find(s => s.id === m.id);
          const wouldClear = toClear.find(s => s.id === m.id);
          
          if (wouldSimulate) {
             if (m.homeTeamId && m.awayTeamId && m.homeScore === null) {
                let hScore = Math.floor(Math.random() * 4);
                let aScore = Math.floor(Math.random() * 4);
                // No draws in knockouts
                if (m.stage !== 'GROUP' && hScore === aScore) {
                   hScore += 1;
                }
                return {
                   ...m,
                   homeScore: hScore,
                   awayScore: aScore,
                   status: 'FINISHED'
                };
             }
          } else if (wouldClear) {
             if (m.homeScore !== null || m.awayScore !== null) {
                return {
                   ...m,
                   homeScore: null,
                   awayScore: null,
                   status: 'SCHEDULED'
                };
             }
          }
          return m;
       });
    });
  };

  // calculate current simulated count
  const simCount = matches.filter(m => m.homeScore !== null).length;

  return (
    <div className={`min-h-screen font-sans flex flex-col overflow-x-hidden transition-colors ${settings.isDarkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <header className="bg-slate-900 text-white px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-10 sticky top-0 gap-4 md:gap-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 w-full h-full">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <line x1="12" y1="4" x2="12" y2="20" />
              <circle cx="12" cy="12" r="3" />
              <path d="M2 9h3v6H2" />
              <path d="M22 9h-3v6h3" />
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-white drop-shadow-sm">{getTournamentName()}</span>
            <span className="text-emerald-400 drop-shadow-sm">{settings.customTitle !== undefined ? settings.customTitle : 'SWEEPSTAKE'}</span>
            <select 
              value={tournamentId} 
              onChange={(e) => setTournamentId(e.target.value as any)}
              className="ml-auto md:ml-2 text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 rounded px-2 py-1 outline-none focus:border-emerald-500"
            >
              <option value="WC26">World Cup 2026</option>
              <option value="EURO28">Euro 2028 (Test)</option>
              <option value="WC22">World Cup 2022</option>
              <option value="EURO20">Euro 2020</option>
              <option value="WC18">World Cup 2018</option>
            </select>
            <button 
              onClick={() => setShowSettings(true)}
              className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
            >
              <Settings size={18} />
            </button>
          </h1>
        </div>
        <div className="w-full md:w-auto">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>

      <main className="flex-1 py-8 px-4 md:px-8 h-full">
        {activeTab === 'SETUP' && <SetupTab />}
        {activeTab === 'HOME' && <HomeTab setActiveTab={setActiveTab} onNavigateToGroup={(group) => { setActiveTab('GROUPS'); setTargetGroup(group); }} />}
        {activeTab === 'GROUPS' && <GroupsTab initialGroup={targetGroup} onGroupHandled={() => setTargetGroup(null)} />}
        {activeTab === 'MATCHES' && <MatchesTab />}
      </main>
      
      {showSettings && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-900 dark:text-white">Settings</h2>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">Dark Mode</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Toggle dark theme</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={settings.isDarkMode ?? false} onChange={(e) => updateSettings({ isDarkMode: e.target.checked })} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">Randomize All</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Show randomize button in Setup</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={settings.allowRandomize ?? false} onChange={(e) => updateSettings({ allowRandomize: e.target.checked })} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">Simulate Matches</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Show simulation controls</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={settings.allowSimulate ?? false} onChange={(e) => updateSettings({ allowSimulate: e.target.checked })} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-500"></div>
                </label>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1">Custom Title</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Override the default "SWEEPSTAKE" text</p>
                <input 
                  type="text" 
                  value={settings.customTitle !== undefined ? settings.customTitle : 'SWEEPSTAKE'} 
                  onChange={(e) => updateSettings({ customTitle: e.target.value })}
                  placeholder="e.g. OFFICE LEAGUE"
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-auto text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="text-center text-sm font-medium">
            Assign teams, enter scores, and battle for the sweepstake crown!
          </div>
          
          {settings.allowSimulate && (
          <div className="w-full max-w-md bg-slate-800 rounded-lg p-4 border border-emerald-900/50 shadow-inner">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Time Simulator ({simCount}/{matches.length})</label>
              <span className="text-xs text-slate-500">Test mode</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max={matches.length} 
              value={simCount} 
              onChange={(e) => handleSimulateSteps(parseInt(e.target.value))}
              className="w-full accent-emerald-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          )}
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

