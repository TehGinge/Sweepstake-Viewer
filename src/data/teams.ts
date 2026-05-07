import { Team } from '../types';

export const TEAMS: Team[] = [
  // Group A
  { id: 'MEX', name: 'Mexico', group: 'A', iso2: 'mx', fifaRanking: 15 },
  { id: 'RSA', name: 'South Africa', group: 'A', iso2: 'za', fifaRanking: 60 },
  { id: 'KOR', name: 'Korea Republic', group: 'A', iso2: 'kr', fifaRanking: 25 },
  { id: 'CZE', name: 'Czechia', group: 'A', iso2: 'cz', fifaRanking: 41 },
  // Group B
  { id: 'CAN', name: 'Canada', group: 'B', iso2: 'ca', fifaRanking: 30 },
  { id: 'BIH', name: 'Bosnia and Herzegovina', group: 'B', iso2: 'ba', fifaRanking: 65 },
  { id: 'QAT', name: 'Qatar', group: 'B', iso2: 'qa', fifaRanking: 55 },
  { id: 'SUI', name: 'Switzerland', group: 'B', iso2: 'ch', fifaRanking: 19 },
  // Group C
  { id: 'BRA', name: 'Brazil', group: 'C', iso2: 'br', fifaRanking: 6 },
  { id: 'HAI', name: 'Haiti', group: 'C', iso2: 'ht', fifaRanking: 83 },
  { id: 'SCO', name: 'Scotland', group: 'C', iso2: 'gb-sct', fifaRanking: 43 },
  { id: 'MAR', name: 'Morocco', group: 'C', iso2: 'ma', fifaRanking: 8 },
  // Group D
  { id: 'USA', name: 'USA', group: 'D', iso2: 'us', fifaRanking: 16 },
  { id: 'PAR', name: 'Paraguay', group: 'D', iso2: 'py', fifaRanking: 40 },
  { id: 'AUS', name: 'Australia', group: 'D', iso2: 'au', fifaRanking: 27 },
  { id: 'TUR', name: 'Turkiye', group: 'D', iso2: 'tr', fifaRanking: 22 },
  // Group E
  { id: 'GER', name: 'Germany', group: 'E', iso2: 'de', fifaRanking: 10 },
  { id: 'CUW', name: 'Curacao', group: 'E', iso2: 'cw', fifaRanking: 82 },
  { id: 'CIV', name: "Cote d'Ivoire", group: 'E', iso2: 'ci', fifaRanking: 34 },
  { id: 'ECU', name: 'Ecuador', group: 'E', iso2: 'ec', fifaRanking: 23 },
  // Group F
  { id: 'NED', name: 'Netherlands', group: 'F', iso2: 'nl', fifaRanking: 7 },
  { id: 'JPN', name: 'Japan', group: 'F', iso2: 'jp', fifaRanking: 18 },
  { id: 'SWE', name: 'Sweden', group: 'F', iso2: 'se', fifaRanking: 38 },
  { id: 'TUN', name: 'Tunisia', group: 'F', iso2: 'tn', fifaRanking: 44 },
  // Group G
  { id: 'BEL', name: 'Belgium', group: 'G', iso2: 'be', fifaRanking: 9 },
  { id: 'EGY', name: 'Egypt', group: 'G', iso2: 'eg', fifaRanking: 29 },
  { id: 'IRN', name: 'IR Iran', group: 'G', iso2: 'ir', fifaRanking: 21 },
  { id: 'NZL', name: 'New Zealand', group: 'G', iso2: 'nz', fifaRanking: 85 },
  // Group H
  { id: 'ESP', name: 'Spain', group: 'H', iso2: 'es', fifaRanking: 2 },
  { id: 'CPV', name: 'Cabo Verde', group: 'H', iso2: 'cv', fifaRanking: 69 },
  { id: 'KSA', name: 'Saudi Arabia', group: 'H', iso2: 'sa', fifaRanking: 61 },
  { id: 'URU', name: 'Uruguay', group: 'H', iso2: 'uy', fifaRanking: 17 },
  // Group I
  { id: 'FRA', name: 'France', group: 'I', iso2: 'fr', fifaRanking: 1 },
  { id: 'SEN', name: 'Senegal', group: 'I', iso2: 'sn', fifaRanking: 14 },
  { id: 'IRQ', name: 'Iraq', group: 'I', iso2: 'iq', fifaRanking: 57 },
  { id: 'NOR', name: 'Norway', group: 'I', iso2: 'no', fifaRanking: 31 },
  // Group J
  { id: 'ARG', name: 'Argentina', group: 'J', iso2: 'ar', fifaRanking: 3 },
  { id: 'ALG', name: 'Algeria', group: 'J', iso2: 'dz', fifaRanking: 28 },
  { id: 'AUT', name: 'Austria', group: 'J', iso2: 'at', fifaRanking: 24 },
  { id: 'JOR', name: 'Jordan', group: 'J', iso2: 'jo', fifaRanking: 63 },
  // Group K
  { id: 'POR', name: 'Portugal', group: 'K', iso2: 'pt', fifaRanking: 5 },
  { id: 'COD', name: 'Congo DR', group: 'K', iso2: 'cd', fifaRanking: 46 },
  { id: 'UZB', name: 'Uzbekistan', group: 'K', iso2: 'uz', fifaRanking: 50 },
  { id: 'COL', name: 'Colombia', group: 'K', iso2: 'co', fifaRanking: 13 },
  // Group L
  { id: 'ENG', name: 'England', group: 'L', iso2: 'gb-eng', fifaRanking: 4 },
  { id: 'CRO', name: 'Croatia', group: 'L', iso2: 'hr', fifaRanking: 11 },
  { id: 'GHA', name: 'Ghana', group: 'L', iso2: 'gh', fifaRanking: 74 },
  { id: 'PAN', name: 'Panama', group: 'L', iso2: 'pa', fifaRanking: 33 },
];

export const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
