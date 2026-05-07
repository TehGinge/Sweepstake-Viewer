import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { MatchStage, Match } from '../types';
import { CONTROLS, SURFACES, TEXT, getResultBadgeClass } from '../utils/theme';

const STAGES: { stage: MatchStage; title: string }[] = [
  { stage: 'R32', title: 'Round of 32' },
  { stage: 'R16', title: 'Round of 16' },
  { stage: 'QF', title: 'Quarter-Finals' },
  { stage: 'SF', title: 'Semi-Finals' },
  { stage: '3RD', title: 'Third Place Play-off' },
  { stage: 'FINAL', title: 'Final' },
];

export const MatchesTab: React.FC = () => {
  const { matches, setMatches, updateMatch, teams, tournamentId, players, settings } = useAppContext();
  const [activeStage, setActiveStage] = useState<MatchStage>(tournamentId === 'WC26' ? 'R32' : 'R16');

  const stageMatches = matches.filter(m => m.stage === activeStage);

  const simulateStageMatches = () => {
    setMatches(prev => prev.map(match => {
      if (match.stage === activeStage && match.homeTeamId && match.awayTeamId && match.homeScore === null) {
        let hScore = Math.floor(Math.random() * 4);
        let aScore = Math.floor(Math.random() * 4);
        
        // Ensure no draws in knockout stages
        if (hScore === aScore) {
           hScore += 1;
        }

        return {
          ...match,
          homeScore: hScore,
          awayScore: aScore,
          status: 'FINISHED'
        };
      }
      return match;
    }));
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
      {/* Stage Selector */}
      <div className="w-full lg:w-56 shrink-0">
        <h3 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-4 px-2">Tournament Stage</h3>
        <div className="flex overflow-x-auto hide-scrollbar lg:flex-col gap-2 pb-2">
          {STAGES.map(s => {
            if (s.stage === 'R32' && tournamentId !== 'WC26') return null;
            return (
            <button
              key={s.stage}
              onClick={() => setActiveStage(s.stage)}
              className={`px-4 py-3 rounded-lg text-sm font-bold whitespace-nowrap transition-colors flex-1 lg:flex-none text-left shadow-sm
                ${activeStage === s.stage 
                  ? 'bg-slate-900 dark:bg-slate-700 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700'}`}
            >
              {s.title}
            </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1">
        <div className={`${SURFACES.card} rounded-xl shadow-sm overflow-hidden flex flex-col`}>
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center flex-wrap gap-4">
            <h2 className={`text-xl font-black ${TEXT.primary}`}>{STAGES.find(s => s.stage === activeStage)?.title}</h2>
            {settings.allowSimulate && (
              <button
                 onClick={simulateStageMatches}
                 className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded hover:bg-emerald-500/20 transition-colors"
               >
                 Simulate Round
               </button>
            )}
          </div>
          
          <div className="divide-y divide-slate-100 dark:divide-slate-700/50 px-6 py-2">
            {stageMatches.map((match, i) => {
              const bstDate = match.date 
                ? new Date(match.date).toLocaleString('en-GB', { timeZone: 'Europe/London', weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' BST' 
                : null;
              return (
              <div key={match.id} className="py-6 first:pt-4 last:pb-6 dark:bg-slate-800">
                <div className="flex flex-col items-center mb-3">
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center">
                    Match {match.id.replace('M', '')} {match.group ? `• Grp ${match.group}` : ''}
                  </div>
                  {(bstDate || match.location) && (
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center">
                      {bstDate} {bstDate && match.location ? ' • ' : ''} {match.location}
                    </div>
                  )}
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-center gap-4">
                  
                  {/* Home Team Selector */}
                  <div className="flex-1 flex items-center justify-center md:justify-end gap-3">
                    {match.homeTeamId && teams.find(t=>t.id === match.homeTeamId) && (
                       <img src={`https://flagcdn.com/w40/${teams.find(t=>t.id === match.homeTeamId)?.iso2}.png`} className="w-8 h-5.5 object-cover rounded shadow-sm hidden md:block dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" alt="flag" />
                    )}
                    <select
                      value={match.homeTeamId || ''}
                      onChange={(e) => updateMatch(match.id, match.homeScore, match.awayScore, e.target.value || null, match.awayTeamId)}
                      className={`w-full md:w-56 p-2.5 rounded-lg text-sm font-bold ${CONTROLS.input}`}
                    >
                      <option value="">{match.placeholderHome ? `----- ${match.placeholderHome} -----` : '-- Select Team --'}</option>
                      {teams.map(t => {
                        const assignee = players.find(p => p.teamIds.includes(t.id));
                        const assigneeName = assignee ? assignee.name : 'Unassigned';
                        return <option key={t.id} value={t.id}>{t.name} ({assigneeName})</option>
                      })}
                    </select>
                  </div>

                  {/* Score Inputs */}
                  <div className={`flex items-center justify-center gap-2.5 px-3 py-2 rounded-lg w-full md:w-auto shadow-sm ${SURFACES.inset}`}>
                    {match.homeScore !== null && match.awayScore !== null && (
                      <span className={`flex items-center justify-center w-7 h-7 rounded text-[10px] font-black tracking-widest ${getResultBadgeClass(match.homeScore > match.awayScore ? 'W' : match.homeScore === match.awayScore ? 'D' : 'L')}`}>
                        {match.homeScore > match.awayScore ? 'W' : match.homeScore === match.awayScore ? 'D' : 'L'}
                      </span>
                    )}
                    <input 
                      type="number" 
                      min="0"
                      value={match.homeScore ?? ''} 
                      onChange={(e) => updateMatch(match.id, e.target.value === '' ? null : parseInt(e.target.value), match.awayScore)}
                      disabled={!match.homeTeamId || !match.awayTeamId}
                      className={`w-12 h-10 text-center font-black text-lg rounded ${CONTROLS.input} disabled:bg-slate-200 disabled:dark:bg-slate-900 disabled:text-slate-500 disabled:dark:text-slate-500`}
                    />
                    <span className="text-slate-500 dark:text-slate-400 font-bold px-1 text-sm">VS</span>
                    <input 
                      type="number" 
                      min="0"
                      value={match.awayScore ?? ''} 
                      onChange={(e) => updateMatch(match.id, match.homeScore, e.target.value === '' ? null : parseInt(e.target.value))}
                      disabled={!match.homeTeamId || !match.awayTeamId}
                      className={`w-12 h-10 text-center font-black text-lg rounded ${CONTROLS.input} disabled:bg-slate-200 disabled:dark:bg-slate-900 disabled:text-slate-500 disabled:dark:text-slate-500`}
                    />
                    {match.homeScore !== null && match.awayScore !== null && (
                      <span className={`flex items-center justify-center w-7 h-7 rounded text-[10px] font-black tracking-widest ${getResultBadgeClass(match.awayScore > match.homeScore ? 'W' : match.homeScore === match.awayScore ? 'D' : 'L')}`}>
                        {match.awayScore > match.homeScore ? 'W' : match.homeScore === match.awayScore ? 'D' : 'L'}
                      </span>
                    )}
                  </div>

                  {/* Away Team Selector */}
                  <div className="flex-1 flex items-center justify-center md:justify-start gap-3">
                    <select
                      value={match.awayTeamId || ''}
                      onChange={(e) => updateMatch(match.id, match.homeScore, match.awayScore, match.homeTeamId, e.target.value || null)}
                      className={`w-full md:w-56 p-2.5 rounded-lg text-sm font-bold ${CONTROLS.input}`}
                    >
                      <option value="">{match.placeholderAway ? `----- ${match.placeholderAway} -----` : '-- Select Team --'}</option>
                      {teams.map(t => {
                        const assignee = players.find(p => p.teamIds.includes(t.id));
                        const assigneeName = assignee ? assignee.name : 'Unassigned';
                        return <option key={t.id} value={t.id}>{t.name} ({assigneeName})</option>
                      })}
                    </select>
                    {match.awayTeamId && teams.find(t=>t.id === match.awayTeamId) && (
                       <img src={`https://flagcdn.com/w40/${teams.find(t=>t.id === match.awayTeamId)?.iso2}.png`} className="w-8 h-5.5 object-cover rounded shadow-sm hidden md:block dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" alt="flag" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
        
        <div className="mt-6 bg-slate-100 dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-300 dark:border-slate-700">
            <h2 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-2">Pro Tip</h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-tight">
              Select the teams playing in each match. Any team that appears in a match automatically scores progression points for their assigned player. To complete a match, simply enter the final score.
            </p>
        </div>
      </div>
    </div>
  );
};
