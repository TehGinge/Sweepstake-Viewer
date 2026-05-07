import fs from 'fs';

const wc22Text = `1		Brazil	Nathan	G1	Yes
2		Belgium	Will	F1	Yes
3		Argentina	Ieuan	C1	Winner
4		France	Chris	D1	Yes
5		England	Sam	B1	Yes
7		Spain	Dave	E1	Yes
8		Netherlands	Chris	A4	Yes
9		Portugal	Joe	H1	Yes
10		Denmark	Nathan	D3	Yes
11		Germany	Kieran	E3	Yes
12		Croatia	Dave	F4	Yes
13		Mexico	Joe	C3	Yes
14		Uruguay	Chris	H3	Yes
15		Switzerland	Joe	G3	Yes
16		USA	Dave	B3	Yes
18		Senegal	Joe	A3	Yes
19		Wales	Will	B4	Yes
20		Iran	Kieran	B2	Yes
21		Serbia	Kieran	G2	Yes
22		Morocco	Will	F3	Yes
24		Japan	Ieuan	E4	Yes
26		Poland	Kieran	C4	Yes
28		South Korea	Dave	H4	Yes
30		Tunisia	Chris	D4	Yes
31		Costa Rica	Ieuan	E2	Yes
38		Australia	Nathan	D2	Yes
41		Canada	Will	F2	Yes
43		Cameroon	Nathan	G4	Yes
44		Ecuador	Ieuan	A2	Yes
50		Qatar	Sam	A1	Yes
51		Saudi Arabia	Sam	C2	Yes
61		Ghana	Sam	H2	Yes`;

const euro20Text = `4		England	David	D1	Yes
24		Ukraine	David	C2	Yes
62		North Macedonia	David	C4	Yes
16		Netherlands	Ieuan	C1	Yes
44		Scotland	Ieuan	D3	Yes
54		Finland	Ieuan	B2	Yes
6		Spain	Jake	E1	Yes
13		Switzerland	Jake	A4	Yes
14		Croatia	Jake	D2	Yes
1		Belgium	Joe	B3	Yes
10		Denmark	Joe	B1	Yes
40		Czech Republic	Joe	D4	Yes
7		Italy	Kieran	A2	Winner
17		Wales	Kieran	A3	Yes
29		Turkey	Kieran	A1	Yes
2		France	Nathan	F3	Yes
23		Austria	Nathan	C3	Yes
38		Russia	Nathan	B4	Yes
12		Germany	Sam	F4	Yes
36		Slovakia	Sam	E4	Yes
37		Hungary	Sam	F1	Yes
5		Portugal	Will	F2	Yes
18		Sweden	Will	E2	Yes
21		Poland	Will	E3	Yes`;

const wc18Text = `16	Mexico	Bimmer	F	Y
19	Denmark	Bimmer	C	Y
22	Costa Rica	Bimmer	E	Y
63	Saudi Arabia	Bimmer	A	Y
5	Belgium	Chris	G	Y
17	Uruguay	Chris	A	Y
43	Australia	Chris	C	Y
48	Morocco	Chris	B	Y
8	Spain	Eddy	B	Y
28	Tunisia	Eddy	G	Y
34	Iran	Eddy	B	Y
49	Panama	Eddy	G	Y
2	Brazil	Ieuan	E	Y
7	France	Ieuan	C	W
38	Serbia	Ieuan	E	Y
62	South Korea	Ieuan	F	Y
11	Switzerland	Jake	E	Y
12	England	Jake	G	Y
21	Iceland	Jake	D	Y
25	Sweden	Jake	F	Y
1	Germany	Kieran	F	Y
6	Poland	Kieran	H	Y
30	Egypt	Kieran	A	Y
41	Nigeria	Kieran	D	Y
3	Portugal	Nathan	B	Y
10	Peru	Nathan	C	Y
13	Colombia	Nathan	H	Y
65	Russia	Nathan	A	Y
4	Argentina	Willy	D	Y
18	Croatia	Willy	D	Y
32	Senegal	Willy	H	Y
44	Japan	Willy	H	Y`;

function parseTournament(text, idPrefix) {
  const lines = text.split('\n');
  const teams = [];
  const sweepstakeNames = [];
  const mapNameToTeams = {};

  lines.forEach((l, idx) => {
    // split by tabs or multiple spaces
    const parts = l.split(/\t+|  +/).map(s => s.trim());
    if (parts.length < 5) return;
    const rank = parseInt(parts[0], 10);
    const country = parts[1];
    const name = parts[2];
    const groupRaw = parts[3];
    const group = groupRaw[0]; // Take first letter, e.g. G1 -> G
    
    const teamId = idPrefix + idx.toString().padStart(2, '0') + country.substring(0,3).toUpperCase();
    
    teams.push({
      id: teamId,
      name: country,
      group: group,
      fifaRanking: rank,
      iso2: country.substring(0,2).toLowerCase()
    });

    if (!mapNameToTeams[name]) mapNameToTeams[name] = [];
    mapNameToTeams[name].push(teamId);
    if (!sweepstakeNames.includes(name)) sweepstakeNames.push(name);
  });

  const players = sweepstakeNames.map((n, i) => ({
    id: "P" + (i + 1),
    name: n,
    teamIds: mapNameToTeams[n]
  }));

  const groupsObj = {};
  teams.forEach(t => groupsObj[t.group] = true);
  const groups = Object.keys(groupsObj).sort();

  return { teams, players, groups };
}

const wc22 = parseTournament(wc22Text, "W22");
const euro20 = parseTournament(euro20Text, "E20");
const wc18 = parseTournament(wc18Text, "W18");

let out = "import { Team, Player, Match } from '../types';\\n\\n";
out += "export const WC22_GROUPS = " + JSON.stringify(wc22.groups) + ";\\n";
out += "export const WC22_TEAMS: Team[] = " + JSON.stringify(wc22.teams, null, 2) + ";\\n";
out += "export const WC22_PLAYERS: Player[] = " + JSON.stringify(wc22.players, null, 2) + ";\\n\\n";

out += "export const EURO20_GROUPS = " + JSON.stringify(euro20.groups) + ";\\n";
out += "export const EURO20_TEAMS: Team[] = " + JSON.stringify(euro20.teams, null, 2) + ";\\n";
out += "export const EURO20_PLAYERS: Player[] = " + JSON.stringify(euro20.players, null, 2) + ";\\n\\n";

out += "export const WC18_GROUPS = " + JSON.stringify(wc18.groups) + ";\\n";
out += "export const WC18_TEAMS: Team[] = " + JSON.stringify(wc18.teams, null, 2) + ";\\n";
out += "export const WC18_PLAYERS: Player[] = " + JSON.stringify(wc18.players, null, 2) + ";\\n\\n";

out += "export const generatePastMatches = (tournamentId: string): Match[] => {\\n" +
"  let teams: Team[] = [];\\n" +
"  let groups: string[] = [];\\n" +
"  if (tournamentId === 'WC22') { teams = WC22_TEAMS; groups = WC22_GROUPS; }\\n" +
"  else if (tournamentId === 'EURO20') { teams = EURO20_TEAMS; groups = EURO20_GROUPS; }\\n" +
"  else if (tournamentId === 'WC18') { teams = WC18_TEAMS; groups = WC18_GROUPS; }\\n\\n" +
"  let matches: Match[] = [];\\n" +
"  let id = 1;\\n" +
"  groups.forEach(g => {\\n" +
"    const groupTeams = teams.filter(t => t.group === g);\\n" +
"    for (let i = 0; i < groupTeams.length; i++) {\\n" +
"        for (let j = i + 1; j < groupTeams.length; j++) {\\n" +
"            matches.push({\\n" +
"                id: tournamentId + '-G-' + g + '-' + (id++),\\n" +
"                stage: 'GROUP',\\n" +
"                homeTeamId: groupTeams[i].id,\\n" +
"                awayTeamId: groupTeams[j].id,\\n" +
"                homeScore: null,\\n" +
"                awayScore: null,\\n" +
"                status: 'SCHEDULED',\\n" +
"                group: g\\n" +
"            });\\n" +
"        }\\n" +
"    }\\n" +
"  });\\n" +
"  return matches;\\n" +
"}\\n";

fs.writeFileSync('src/data/past.ts', out);
