import { Team, Player, Match } from '../types';

export const WC22_GROUPS = ["A","B","C","D","E","F","G","H"];
export const WC22_TEAMS: Team[] = [
  {
    "id": "W2200BRA",
    "name": "Brazil",
    "group": "G",
    "fifaRanking": 1,
    "iso2": "br"
  },
  {
    "id": "W2201BEL",
    "name": "Belgium",
    "group": "F",
    "fifaRanking": 2,
    "iso2": "be"
  },
  {
    "id": "W2202ARG",
    "name": "Argentina",
    "group": "C",
    "fifaRanking": 3,
    "iso2": "ar"
  },
  {
    "id": "W2203FRA",
    "name": "France",
    "group": "D",
    "fifaRanking": 4,
    "iso2": "fr"
  },
  {
    "id": "W2204ENG",
    "name": "England",
    "group": "B",
    "fifaRanking": 5,
    "iso2": "en"
  },
  {
    "id": "W2205SPA",
    "name": "Spain",
    "group": "E",
    "fifaRanking": 7,
    "iso2": "sp"
  },
  {
    "id": "W2206NET",
    "name": "Netherlands",
    "group": "A",
    "fifaRanking": 8,
    "iso2": "ne"
  },
  {
    "id": "W2207POR",
    "name": "Portugal",
    "group": "H",
    "fifaRanking": 9,
    "iso2": "po"
  },
  {
    "id": "W2208DEN",
    "name": "Denmark",
    "group": "D",
    "fifaRanking": 10,
    "iso2": "de"
  },
  {
    "id": "W2209GER",
    "name": "Germany",
    "group": "E",
    "fifaRanking": 11,
    "iso2": "ge"
  },
  {
    "id": "W2210CRO",
    "name": "Croatia",
    "group": "F",
    "fifaRanking": 12,
    "iso2": "cr"
  },
  {
    "id": "W2211MEX",
    "name": "Mexico",
    "group": "C",
    "fifaRanking": 13,
    "iso2": "me"
  },
  {
    "id": "W2212URU",
    "name": "Uruguay",
    "group": "H",
    "fifaRanking": 14,
    "iso2": "ur"
  },
  {
    "id": "W2213SWI",
    "name": "Switzerland",
    "group": "G",
    "fifaRanking": 15,
    "iso2": "sw"
  },
  {
    "id": "W2214USA",
    "name": "USA",
    "group": "B",
    "fifaRanking": 16,
    "iso2": "us"
  },
  {
    "id": "W2215SEN",
    "name": "Senegal",
    "group": "A",
    "fifaRanking": 18,
    "iso2": "se"
  },
  {
    "id": "W2216WAL",
    "name": "Wales",
    "group": "B",
    "fifaRanking": 19,
    "iso2": "wa"
  },
  {
    "id": "W2217IRA",
    "name": "Iran",
    "group": "B",
    "fifaRanking": 20,
    "iso2": "ir"
  },
  {
    "id": "W2218SER",
    "name": "Serbia",
    "group": "G",
    "fifaRanking": 21,
    "iso2": "se"
  },
  {
    "id": "W2219MOR",
    "name": "Morocco",
    "group": "F",
    "fifaRanking": 22,
    "iso2": "mo"
  },
  {
    "id": "W2220JAP",
    "name": "Japan",
    "group": "E",
    "fifaRanking": 24,
    "iso2": "ja"
  },
  {
    "id": "W2221POL",
    "name": "Poland",
    "group": "C",
    "fifaRanking": 26,
    "iso2": "po"
  },
  {
    "id": "W2222SOU",
    "name": "South Korea",
    "group": "H",
    "fifaRanking": 28,
    "iso2": "so"
  },
  {
    "id": "W2223TUN",
    "name": "Tunisia",
    "group": "D",
    "fifaRanking": 30,
    "iso2": "tu"
  },
  {
    "id": "W2224COS",
    "name": "Costa Rica",
    "group": "E",
    "fifaRanking": 31,
    "iso2": "co"
  },
  {
    "id": "W2225AUS",
    "name": "Australia",
    "group": "D",
    "fifaRanking": 38,
    "iso2": "au"
  },
  {
    "id": "W2226CAN",
    "name": "Canada",
    "group": "F",
    "fifaRanking": 41,
    "iso2": "ca"
  },
  {
    "id": "W2227CAM",
    "name": "Cameroon",
    "group": "G",
    "fifaRanking": 43,
    "iso2": "ca"
  },
  {
    "id": "W2228ECU",
    "name": "Ecuador",
    "group": "A",
    "fifaRanking": 44,
    "iso2": "ec"
  },
  {
    "id": "W2229QAT",
    "name": "Qatar",
    "group": "A",
    "fifaRanking": 50,
    "iso2": "qa"
  },
  {
    "id": "W2230SAU",
    "name": "Saudi Arabia",
    "group": "C",
    "fifaRanking": 51,
    "iso2": "sa"
  },
  {
    "id": "W2231GHA",
    "name": "Ghana",
    "group": "H",
    "fifaRanking": 61,
    "iso2": "gh"
  }
];
export const WC22_PLAYERS: Player[] = [
  {
    "id": "P1",
    "name": "Nathan",
    "teamIds": [
      "W2200BRA",
      "W2208DEN",
      "W2225AUS",
      "W2227CAM"
    ]
  },
  {
    "id": "P2",
    "name": "Will",
    "teamIds": [
      "W2201BEL",
      "W2216WAL",
      "W2219MOR",
      "W2226CAN"
    ]
  },
  {
    "id": "P3",
    "name": "Ieuan",
    "teamIds": [
      "W2202ARG",
      "W2220JAP",
      "W2224COS",
      "W2228ECU"
    ]
  },
  {
    "id": "P4",
    "name": "Chris",
    "teamIds": [
      "W2203FRA",
      "W2206NET",
      "W2212URU",
      "W2223TUN"
    ]
  },
  {
    "id": "P5",
    "name": "Sam",
    "teamIds": [
      "W2204ENG",
      "W2229QAT",
      "W2230SAU",
      "W2231GHA"
    ]
  },
  {
    "id": "P6",
    "name": "Dave",
    "teamIds": [
      "W2205SPA",
      "W2210CRO",
      "W2214USA",
      "W2222SOU"
    ]
  },
  {
    "id": "P7",
    "name": "Joe",
    "teamIds": [
      "W2207POR",
      "W2211MEX",
      "W2213SWI",
      "W2215SEN"
    ]
  },
  {
    "id": "P8",
    "name": "Kieran",
    "teamIds": [
      "W2209GER",
      "W2217IRA",
      "W2218SER",
      "W2221POL"
    ]
  }
];

export const EURO20_GROUPS = ["A","B","C","D","E","F"];
export const EURO20_TEAMS: Team[] = [
  {
    "id": "E2000ENG",
    "name": "England",
    "group": "D",
    "fifaRanking": 4,
    "iso2": "en"
  },
  {
    "id": "E2001UKR",
    "name": "Ukraine",
    "group": "C",
    "fifaRanking": 24,
    "iso2": "uk"
  },
  {
    "id": "E2002NOR",
    "name": "North Macedonia",
    "group": "C",
    "fifaRanking": 62,
    "iso2": "no"
  },
  {
    "id": "E2003NET",
    "name": "Netherlands",
    "group": "C",
    "fifaRanking": 16,
    "iso2": "ne"
  },
  {
    "id": "E2004SCO",
    "name": "Scotland",
    "group": "D",
    "fifaRanking": 44,
    "iso2": "sc"
  },
  {
    "id": "E2005FIN",
    "name": "Finland",
    "group": "B",
    "fifaRanking": 54,
    "iso2": "fi"
  },
  {
    "id": "E2006SPA",
    "name": "Spain",
    "group": "E",
    "fifaRanking": 6,
    "iso2": "sp"
  },
  {
    "id": "E2007SWI",
    "name": "Switzerland",
    "group": "A",
    "fifaRanking": 13,
    "iso2": "sw"
  },
  {
    "id": "E2008CRO",
    "name": "Croatia",
    "group": "D",
    "fifaRanking": 14,
    "iso2": "cr"
  },
  {
    "id": "E2009BEL",
    "name": "Belgium",
    "group": "B",
    "fifaRanking": 1,
    "iso2": "be"
  },
  {
    "id": "E2010DEN",
    "name": "Denmark",
    "group": "B",
    "fifaRanking": 10,
    "iso2": "de"
  },
  {
    "id": "E2011CZE",
    "name": "Czech Republic",
    "group": "D",
    "fifaRanking": 40,
    "iso2": "cz"
  },
  {
    "id": "E2012ITA",
    "name": "Italy",
    "group": "A",
    "fifaRanking": 7,
    "iso2": "it"
  },
  {
    "id": "E2013WAL",
    "name": "Wales",
    "group": "A",
    "fifaRanking": 17,
    "iso2": "wa"
  },
  {
    "id": "E2014TUR",
    "name": "Turkey",
    "group": "A",
    "fifaRanking": 29,
    "iso2": "tu"
  },
  {
    "id": "E2015FRA",
    "name": "France",
    "group": "F",
    "fifaRanking": 2,
    "iso2": "fr"
  },
  {
    "id": "E2016AUS",
    "name": "Austria",
    "group": "C",
    "fifaRanking": 23,
    "iso2": "au"
  },
  {
    "id": "E2017RUS",
    "name": "Russia",
    "group": "B",
    "fifaRanking": 38,
    "iso2": "ru"
  },
  {
    "id": "E2018GER",
    "name": "Germany",
    "group": "F",
    "fifaRanking": 12,
    "iso2": "ge"
  },
  {
    "id": "E2019SLO",
    "name": "Slovakia",
    "group": "E",
    "fifaRanking": 36,
    "iso2": "sl"
  },
  {
    "id": "E2020HUN",
    "name": "Hungary",
    "group": "F",
    "fifaRanking": 37,
    "iso2": "hu"
  },
  {
    "id": "E2021POR",
    "name": "Portugal",
    "group": "F",
    "fifaRanking": 5,
    "iso2": "po"
  },
  {
    "id": "E2022SWE",
    "name": "Sweden",
    "group": "E",
    "fifaRanking": 18,
    "iso2": "sw"
  },
  {
    "id": "E2023POL",
    "name": "Poland",
    "group": "E",
    "fifaRanking": 21,
    "iso2": "po"
  }
];
export const EURO20_PLAYERS: Player[] = [
  {
    "id": "P1",
    "name": "David",
    "teamIds": [
      "E2000ENG",
      "E2001UKR",
      "E2002NOR"
    ]
  },
  {
    "id": "P2",
    "name": "Ieuan",
    "teamIds": [
      "E2003NET",
      "E2004SCO",
      "E2005FIN"
    ]
  },
  {
    "id": "P3",
    "name": "Jake",
    "teamIds": [
      "E2006SPA",
      "E2007SWI",
      "E2008CRO"
    ]
  },
  {
    "id": "P4",
    "name": "Joe",
    "teamIds": [
      "E2009BEL",
      "E2010DEN",
      "E2011CZE"
    ]
  },
  {
    "id": "P5",
    "name": "Kieran",
    "teamIds": [
      "E2012ITA",
      "E2013WAL",
      "E2014TUR"
    ]
  },
  {
    "id": "P6",
    "name": "Nathan",
    "teamIds": [
      "E2015FRA",
      "E2016AUS",
      "E2017RUS"
    ]
  },
  {
    "id": "P7",
    "name": "Sam",
    "teamIds": [
      "E2018GER",
      "E2019SLO",
      "E2020HUN"
    ]
  },
  {
    "id": "P8",
    "name": "Will",
    "teamIds": [
      "E2021POR",
      "E2022SWE",
      "E2023POL"
    ]
  }
];

export const WC18_GROUPS = ["A","B","C","D","E","F","G","H"];
export const WC18_TEAMS: Team[] = [
  {
    "id": "W1800MEX",
    "name": "Mexico",
    "group": "F",
    "fifaRanking": 16,
    "iso2": "me"
  },
  {
    "id": "W1801DEN",
    "name": "Denmark",
    "group": "C",
    "fifaRanking": 19,
    "iso2": "de"
  },
  {
    "id": "W1802COS",
    "name": "Costa Rica",
    "group": "E",
    "fifaRanking": 22,
    "iso2": "co"
  },
  {
    "id": "W1803SAU",
    "name": "Saudi Arabia",
    "group": "A",
    "fifaRanking": 63,
    "iso2": "sa"
  },
  {
    "id": "W1804BEL",
    "name": "Belgium",
    "group": "G",
    "fifaRanking": 5,
    "iso2": "be"
  },
  {
    "id": "W1805URU",
    "name": "Uruguay",
    "group": "A",
    "fifaRanking": 17,
    "iso2": "ur"
  },
  {
    "id": "W1806AUS",
    "name": "Australia",
    "group": "C",
    "fifaRanking": 43,
    "iso2": "au"
  },
  {
    "id": "W1807MOR",
    "name": "Morocco",
    "group": "B",
    "fifaRanking": 48,
    "iso2": "mo"
  },
  {
    "id": "W1808SPA",
    "name": "Spain",
    "group": "B",
    "fifaRanking": 8,
    "iso2": "sp"
  },
  {
    "id": "W1809TUN",
    "name": "Tunisia",
    "group": "G",
    "fifaRanking": 28,
    "iso2": "tu"
  },
  {
    "id": "W1810IRA",
    "name": "Iran",
    "group": "B",
    "fifaRanking": 34,
    "iso2": "ir"
  },
  {
    "id": "W1811PAN",
    "name": "Panama",
    "group": "G",
    "fifaRanking": 49,
    "iso2": "pa"
  },
  {
    "id": "W1812BRA",
    "name": "Brazil",
    "group": "E",
    "fifaRanking": 2,
    "iso2": "br"
  },
  {
    "id": "W1813FRA",
    "name": "France",
    "group": "C",
    "fifaRanking": 7,
    "iso2": "fr"
  },
  {
    "id": "W1814SER",
    "name": "Serbia",
    "group": "E",
    "fifaRanking": 38,
    "iso2": "se"
  },
  {
    "id": "W1815SOU",
    "name": "South Korea",
    "group": "F",
    "fifaRanking": 62,
    "iso2": "so"
  },
  {
    "id": "W1816SWI",
    "name": "Switzerland",
    "group": "E",
    "fifaRanking": 11,
    "iso2": "sw"
  },
  {
    "id": "W1817ENG",
    "name": "England",
    "group": "G",
    "fifaRanking": 12,
    "iso2": "en"
  },
  {
    "id": "W1818ICE",
    "name": "Iceland",
    "group": "D",
    "fifaRanking": 21,
    "iso2": "ic"
  },
  {
    "id": "W1819SWE",
    "name": "Sweden",
    "group": "F",
    "fifaRanking": 25,
    "iso2": "sw"
  },
  {
    "id": "W1820GER",
    "name": "Germany",
    "group": "F",
    "fifaRanking": 1,
    "iso2": "ge"
  },
  {
    "id": "W1821POL",
    "name": "Poland",
    "group": "H",
    "fifaRanking": 6,
    "iso2": "po"
  },
  {
    "id": "W1822EGY",
    "name": "Egypt",
    "group": "A",
    "fifaRanking": 30,
    "iso2": "eg"
  },
  {
    "id": "W1823NIG",
    "name": "Nigeria",
    "group": "D",
    "fifaRanking": 41,
    "iso2": "ni"
  },
  {
    "id": "W1824POR",
    "name": "Portugal",
    "group": "B",
    "fifaRanking": 3,
    "iso2": "po"
  },
  {
    "id": "W1825PER",
    "name": "Peru",
    "group": "C",
    "fifaRanking": 10,
    "iso2": "pe"
  },
  {
    "id": "W1826COL",
    "name": "Colombia",
    "group": "H",
    "fifaRanking": 13,
    "iso2": "co"
  },
  {
    "id": "W1827RUS",
    "name": "Russia",
    "group": "A",
    "fifaRanking": 65,
    "iso2": "ru"
  },
  {
    "id": "W1828ARG",
    "name": "Argentina",
    "group": "D",
    "fifaRanking": 4,
    "iso2": "ar"
  },
  {
    "id": "W1829CRO",
    "name": "Croatia",
    "group": "D",
    "fifaRanking": 18,
    "iso2": "cr"
  },
  {
    "id": "W1830SEN",
    "name": "Senegal",
    "group": "H",
    "fifaRanking": 32,
    "iso2": "se"
  },
  {
    "id": "W1831JAP",
    "name": "Japan",
    "group": "H",
    "fifaRanking": 44,
    "iso2": "ja"
  }
];
export const WC18_PLAYERS: Player[] = [
  {
    "id": "P1",
    "name": "Bimmer",
    "teamIds": [
      "W1800MEX",
      "W1801DEN",
      "W1802COS",
      "W1803SAU"
    ]
  },
  {
    "id": "P2",
    "name": "Chris",
    "teamIds": [
      "W1804BEL",
      "W1805URU",
      "W1806AUS",
      "W1807MOR"
    ]
  },
  {
    "id": "P3",
    "name": "Eddy",
    "teamIds": [
      "W1808SPA",
      "W1809TUN",
      "W1810IRA",
      "W1811PAN"
    ]
  },
  {
    "id": "P4",
    "name": "Ieuan",
    "teamIds": [
      "W1812BRA",
      "W1813FRA",
      "W1814SER",
      "W1815SOU"
    ]
  },
  {
    "id": "P5",
    "name": "Jake",
    "teamIds": [
      "W1816SWI",
      "W1817ENG",
      "W1818ICE",
      "W1819SWE"
    ]
  },
  {
    "id": "P6",
    "name": "Kieran",
    "teamIds": [
      "W1820GER",
      "W1821POL",
      "W1822EGY",
      "W1823NIG"
    ]
  },
  {
    "id": "P7",
    "name": "Nathan",
    "teamIds": [
      "W1824POR",
      "W1825PER",
      "W1826COL",
      "W1827RUS"
    ]
  },
  {
    "id": "P8",
    "name": "Willy",
    "teamIds": [
      "W1828ARG",
      "W1829CRO",
      "W1830SEN",
      "W1831JAP"
    ]
  }
];

export const generatePastMatches = (tournamentId: string): Match[] => {
  let teams: Team[] = [];
  let groups: string[] = [];
  if (tournamentId === 'WC22') { teams = WC22_TEAMS; groups = WC22_GROUPS; }
  else if (tournamentId === 'EURO20') { teams = EURO20_TEAMS; groups = EURO20_GROUPS; }
  else if (tournamentId === 'WC18') { teams = WC18_TEAMS; groups = WC18_GROUPS; }

  let matches: Match[] = [];
  let id = 1;
  groups.forEach(g => {
    const groupTeams = teams.filter(t => t.group === g);
    for (let i = 0; i < groupTeams.length; i++) {
        for (let j = i + 1; j < groupTeams.length; j++) {
            matches.push({
                id: tournamentId + '-G-' + g + '-' + (id++),
                stage: 'GROUP',
                homeTeamId: groupTeams[i].id,
                awayTeamId: groupTeams[j].id,
                homeScore: null,
                awayScore: null,
                status: 'SCHEDULED',
                group: g
            });
        }
    }
  });
  return matches;
}
