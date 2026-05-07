import React, { createContext, useContext, useState, useEffect } from 'react';
import { Player, Match, ScoreConfig, Team, TournamentId } from '../types';
import { generateInitialMatches } from '../data/matches';
import { TEAMS as WC26_TEAMS, GROUPS as WC26_GROUPS } from '../data/teams';
import { EURO28_TEAMS, EURO28_GROUPS, generateEuro28Matches } from '../data/euro28';
import {
  generatePastMatches,
  WC22_TEAMS, WC22_GROUPS, WC22_PLAYERS,
  EURO20_TEAMS, EURO20_GROUPS, EURO20_PLAYERS,
  WC18_TEAMS, WC18_GROUPS, WC18_PLAYERS
} from '../data/past';

const getTeams = (id: string) => {
    switch (id) {
      case 'WC26': return WC26_TEAMS;
      case 'EURO28': return EURO28_TEAMS;
      case 'WC22': return WC22_TEAMS;
      case 'EURO20': return EURO20_TEAMS;
      case 'WC18': return WC18_TEAMS;
      default: return WC26_TEAMS;
    }
  };

const getGroups = (id: string) => {
  switch (id) {
    case 'WC26': return WC26_GROUPS;
    case 'EURO28': return EURO28_GROUPS;
    case 'WC22': return WC22_GROUPS;
    case 'EURO20': return EURO20_GROUPS;
    case 'WC18': return WC18_GROUPS;
    default: return WC26_GROUPS;
  }
};

const getDefaultPlayers = (id: string) => {
  switch (id) {
    case 'WC22': return WC22_PLAYERS;
    case 'EURO20': return EURO20_PLAYERS;
    case 'WC18': return WC18_PLAYERS;
    default: return INITIAL_PLAYERS.map(p => ({ ...p, teamIds: [] }));
  }
};

const getDefaultMatches = (id: string) => {
  switch (id) {
    case 'WC26': return generateInitialMatches();
    case 'EURO28': return generateEuro28Matches();
    case 'WC22': return generatePastMatches('WC22');
    case 'EURO20': return generatePastMatches('EURO20');
    case 'WC18': return generatePastMatches('WC18');
    default: return generateInitialMatches();
  }
};

interface AppSettings {
  isDarkMode: boolean;
  allowRandomize: boolean;
  allowSimulate: boolean;
  customTitle: string;
}

interface AppState {
  tournamentId: TournamentId;
  teams: Team[];
  groups: string[];
  players: Player[];
  matches: Match[];
  setMatches: React.Dispatch<React.SetStateAction<Match[]>>;
  config: ScoreConfig;
  settings: AppSettings;
  setTournamentId: (id: TournamentId) => void;
  setPlayers: (players: Player[]) => void;
  updateMatch: (id: string, homeScore: number | null, awayScore: number | null, homeTeamId?: string | null, awayTeamId?: string | null) => void;
  assignTeamsRandomly: () => void;
  clearAllAssignments: () => void;
  resetTournament: () => void;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
}


const DEFAULT_CONFIG: ScoreConfig = {
  matchWin: 3,
  matchDraw: 1,
};

const INITIAL_PLAYERS: Player[] = Array.from({ length: 8 }, (_, i) => ({
  id: `P${i + 1}`,
  name: `Player ${i + 1}`,
  teamIds: [],
}));

const AppContext = createContext<AppState | undefined>(undefined);

const DEFAULT_SETTINGS: AppSettings = {
  isDarkMode: false,
  allowRandomize: false,
  allowSimulate: false,
  customTitle: "SWEEPSTAKE",
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tournamentId, setTournamentIdState] = useState<TournamentId>('WC26');
  const teams = getTeams(tournamentId);
  const groups = getGroups(tournamentId);

  const [players, setPlayersState] = useState<Player[]>(INITIAL_PLAYERS);
  const [matches, setMatches] = useState<Match[]>([]);
  const [config, setConfig] = useState<ScoreConfig>(DEFAULT_CONFIG);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('worldCupAppState');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const savedTourneyId = parsed.tournamentId || 'WC26';
        if (parsed.tournamentId) {
          setTournamentIdState(savedTourneyId);
        }
        
        let loadedPlayers = parsed.players || getDefaultPlayers(savedTourneyId);
        
        const activeTeams = getTeams(savedTourneyId);
        
        if (loadedPlayers.length > 0 && loadedPlayers[0].teamIds.length > 0) {
           const someTeamId = loadedPlayers[0].teamIds[0];
           if (!activeTeams.some(t => t.id === someTeamId)) {
             loadedPlayers = getDefaultPlayers(savedTourneyId);
           }
        }
        setPlayersState(loadedPlayers);
        
        const defaultMatches = getDefaultMatches(savedTourneyId);
        let loadedMatches = defaultMatches.map((dm: Match) => {
          if (!parsed.matches) return dm;
          const lm = parsed.matches.find((m: Match) => m.id === dm.id);
          if (lm) {
            return {
              ...dm,
              homeScore: lm.homeScore,
              awayScore: lm.awayScore,
              // Group match teams are hardcoded, but users assign knockouts
              homeTeamId: dm.stage === 'GROUP' ? dm.homeTeamId : lm.homeTeamId,
              awayTeamId: dm.stage === 'GROUP' ? dm.awayTeamId : lm.awayTeamId,
            };
          }
          return dm;
        });

        const firstGroupMatch = loadedMatches.find((m: Match) => m.stage === 'GROUP');
        if (firstGroupMatch && firstGroupMatch.homeTeamId && !activeTeams.some(t => t.id === firstGroupMatch.homeTeamId)) {
          loadedMatches = defaultMatches;
        }

        setMatches(loadedMatches);
        let loadedConfig = parsed.config;
        if (loadedConfig && typeof loadedConfig.matchWin === 'undefined') {
          // Migration from old config
          loadedConfig = {
            matchWin: loadedConfig.groupWin ?? DEFAULT_CONFIG.matchWin,
            matchDraw: loadedConfig.groupDraw ?? DEFAULT_CONFIG.matchDraw
          };
        }
        setConfig(loadedConfig || DEFAULT_CONFIG);
        setSettings({ ...DEFAULT_SETTINGS, ...(parsed.settings || {}) });
      } catch (e) {
        setMatches(generateInitialMatches());
      }
    } else {
      setMatches(generateInitialMatches());
    }
    setIsLoaded(true);
  }, []);

  // Auto-populate knockouts based on match results
  useEffect(() => {
    if (isLoaded) {
      import('../utils/knockouts').then(({ autoPopulateKnockouts }) => {
        setMatches(prevMatches => {
          const nextMatches = autoPopulateKnockouts(prevMatches, teams);
          
          let changed = false;
          for (let i = 0; i < prevMatches.length; i++) {
            if (prevMatches[i].homeTeamId !== nextMatches[i].homeTeamId || prevMatches[i].awayTeamId !== nextMatches[i].awayTeamId) {
              changed = true;
              break;
            }
          }
          
          return changed ? nextMatches : prevMatches;
        });
      });
    }
  }, [matches, teams, isLoaded]);

  // Save to local storage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('worldCupAppState', JSON.stringify({ players, matches, config, tournamentId, settings }));
      
      if (settings.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [players, matches, config, tournamentId, settings, isLoaded]);

  const setTournamentId = (id: TournamentId) => {
    setTournamentIdState(id);
    const newMatches = getDefaultMatches(id);
    setMatches(newMatches);
    setPlayersState(getDefaultPlayers(id));
  };

  const setPlayers = (newPlayers: Player[]) => setPlayersState(newPlayers);

  const updateMatch = (id: string, homeScore: number | null, awayScore: number | null, homeTeamId?: string | null, awayTeamId?: string | null) => {
    setMatches(prev => prev.map(m => {
      if (m.id === id) {
        const updated = { ...m, homeScore, awayScore };
        if (homeScore !== null && awayScore !== null) {
          updated.status = 'FINISHED';
        } else {
          updated.status = 'SCHEDULED';
        }
        if (homeTeamId !== undefined) updated.homeTeamId = homeTeamId;
        if (awayTeamId !== undefined) updated.awayTeamId = awayTeamId;
        return updated;
      }
      return m;
    }));
  };

  const assignTeamsRandomly = () => {
    if (players.length === 0) return;
    const shuffledTeams = [...teams].sort(() => Math.random() - 0.5);
    const newPlayers = players.map(p => ({ ...p, teamIds: [] as string[] }));
    
    shuffledTeams.forEach((team, index) => {
      const playerIndex = index % players.length;
      newPlayers[playerIndex].teamIds.push(team.id);
    });
    
    setPlayersState(newPlayers);
  };

  const clearAllAssignments = () => {
    setPlayersState(prev => prev.map(p => ({ ...p, teamIds: [] })));
  };

  const resetTournament = () => {
    setMatches(getDefaultMatches(tournamentId));
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  if (!isLoaded) return null;

  return (
    <AppContext.Provider value={{
      tournamentId, teams, groups, players, matches, setMatches, config, settings, setTournamentId, setPlayers, updateMatch, assignTeamsRandomly, clearAllAssignments, resetTournament, updateSettings
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
