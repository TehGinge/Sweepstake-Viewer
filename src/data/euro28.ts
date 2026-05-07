import { Team, Match } from '../types';

export const EURO28_TEAMS: Team[] = [
  // A
  { id: 'ENG', name: 'England', group: 'A', iso2: 'gb-eng', fifaRanking: 4 },
  { id: 'IRL', name: 'Rep. Ireland', group: 'A', iso2: 'ie', fifaRanking: 60 },
  { id: 'DEN', name: 'Denmark', group: 'A', iso2: 'dk', fifaRanking: 21 },
  { id: 'ROU', name: 'Romania', group: 'A', iso2: 'ro', fifaRanking: 46 },
  // B
  { id: 'FRA', name: 'France', group: 'B', iso2: 'fr', fifaRanking: 2 },
  { id: 'ITA', name: 'Italy', group: 'B', iso2: 'it', fifaRanking: 9 },
  { id: 'ALB', name: 'Albania', group: 'B', iso2: 'al', fifaRanking: 66 },
  { id: 'SVK', name: 'Slovakia', group: 'B', iso2: 'sk', fifaRanking: 43 },
  // C
  { id: 'ESP', name: 'Spain', group: 'C', iso2: 'es', fifaRanking: 3 },
  { id: 'SCO', name: 'Scotland', group: 'C', iso2: 'gb-sct', fifaRanking: 39 },
  { id: 'HUN', name: 'Hungary', group: 'C', iso2: 'hu', fifaRanking: 26 },
  { id: 'GRE', name: 'Greece', group: 'C', iso2: 'gr', fifaRanking: 50 },
  // D
  { id: 'GER', name: 'Germany', group: 'D', iso2: 'de', fifaRanking: 16 },
  { id: 'WAL', name: 'Wales', group: 'D', iso2: 'gb-wls', fifaRanking: 29 },
  { id: 'SRB', name: 'Serbia', group: 'D', iso2: 'rs', fifaRanking: 33 },
  { id: 'SVN', name: 'Slovenia', group: 'D', iso2: 'si', fifaRanking: 52 },
  // E
  { id: 'POR', name: 'Portugal', group: 'E', iso2: 'pt', fifaRanking: 6 },
  { id: 'NED', name: 'Netherlands', group: 'E', iso2: 'nl', fifaRanking: 7 },
  { id: 'SUI', name: 'Switzerland', group: 'E', iso2: 'ch', fifaRanking: 19 },
  { id: 'CZE', name: 'Czechia', group: 'E', iso2: 'cz', fifaRanking: 36 },
  // F
  { id: 'BEL', name: 'Belgium', group: 'F', iso2: 'be', fifaRanking: 4 },
  { id: 'AUT', name: 'Austria', group: 'F', iso2: 'at', fifaRanking: 25 },
  { id: 'TUR', name: 'Turkiye', group: 'F', iso2: 'tr', fifaRanking: 40 },
  { id: 'POL', name: 'Poland', group: 'F', iso2: 'pl', fifaRanking: 28 },
];

export const EURO28_GROUPS = ['A', 'B', 'C', 'D', 'E', 'F'];

export const generateEuro28Matches = (): Match[] => {
  let matches: Match[] = [];
  let id = 1;

  EURO28_GROUPS.forEach(g => {
    const groupTeams = EURO28_TEAMS.filter(t => t.group === g);
    for (let i = 0; i < groupTeams.length; i++) {
        for (let j = i + 1; j < groupTeams.length; j++) {
            matches.push({
                id: `E28-G-${g}-${id++}`,
                stage: 'GROUP',
                homeTeamId: groupTeams[i].id,
                awayTeamId: groupTeams[j].id,
                homeScore: null,
                awayScore: null,
                status: 'SCHEDULED'
            });
        }
    }
  });

  ['R16', 'QF', 'SF', 'FINAL'].forEach(stage => {
    const num = stage === 'R16' ? 8 : stage === 'QF' ? 4 : stage === 'SF' ? 2 : 1;
    for (let i = 0; i < num; i++) {
      matches.push({
        id: `E28-${stage}-${id++}`,
        stage: stage as any,
        homeTeamId: null,
        awayTeamId: null,
        homeScore: null,
        awayScore: null,
        status: 'SCHEDULED'
      });
    }
  });

  return matches;
}
