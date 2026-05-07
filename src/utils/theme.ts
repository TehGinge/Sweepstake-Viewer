export const SURFACES = {
  card: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
  cardElevated: 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800',
  inset: 'bg-slate-100/90 dark:bg-slate-950/90 border border-slate-300 dark:border-slate-800',
  insetSoft: 'bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800',
  tableHead: 'bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800',
  divider: 'border-slate-200 dark:border-slate-800',
};

export const TEXT = {
  primary: 'text-slate-900 dark:text-slate-100',
  secondary: 'text-slate-700 dark:text-slate-200',
  muted: 'text-slate-600 dark:text-slate-300',
  subtle: 'text-slate-500 dark:text-slate-400',
};

export const CONTROLS = {
  input: 'bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none',
  segmented: 'bg-slate-200/90 dark:bg-slate-900 border border-slate-300 dark:border-slate-800',
  segmentedActive: 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shadow-sm',
  segmentedIdle: 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/80 dark:hover:bg-slate-800',
};

export function getResultBadgeClass(result: 'W' | 'D' | 'L') {
  if (result === 'W') {
    return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25';
  }
  if (result === 'D') {
    return 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/25';
  }
  return 'bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/25';
}

export const PLAYER_THEMES = [
  { bg: 'bg-blue-500 dark:bg-blue-600', text: 'text-blue-700 dark:text-blue-200', lightBg: 'bg-blue-100 dark:bg-blue-900/55', border: 'border-blue-300 dark:border-blue-700', textContrast: 'text-white' },
  { bg: 'bg-rose-500 dark:bg-rose-600', text: 'text-rose-700 dark:text-rose-200', lightBg: 'bg-rose-100 dark:bg-rose-900/55', border: 'border-rose-300 dark:border-rose-700', textContrast: 'text-white' },
  { bg: 'bg-amber-500 dark:bg-amber-600', text: 'text-amber-700 dark:text-amber-200', lightBg: 'bg-amber-100 dark:bg-amber-900/55', border: 'border-amber-300 dark:border-amber-700', textContrast: 'text-white' },
  { bg: 'bg-emerald-500 dark:bg-emerald-600', text: 'text-emerald-700 dark:text-emerald-200', lightBg: 'bg-emerald-100 dark:bg-emerald-900/55', border: 'border-emerald-300 dark:border-emerald-700', textContrast: 'text-white' },
  { bg: 'bg-fuchsia-500 dark:bg-fuchsia-600', text: 'text-fuchsia-700 dark:text-fuchsia-200', lightBg: 'bg-fuchsia-100 dark:bg-fuchsia-900/55', border: 'border-fuchsia-300 dark:border-fuchsia-700', textContrast: 'text-white' },
  { bg: 'bg-cyan-500 dark:bg-cyan-600', text: 'text-cyan-700 dark:text-cyan-200', lightBg: 'bg-cyan-100 dark:bg-cyan-900/55', border: 'border-cyan-300 dark:border-cyan-700', textContrast: 'text-white' },
  { bg: 'bg-indigo-500 dark:bg-indigo-600', text: 'text-indigo-700 dark:text-indigo-200', lightBg: 'bg-indigo-100 dark:bg-indigo-900/55', border: 'border-indigo-300 dark:border-indigo-700', textContrast: 'text-white' },
  { bg: 'bg-orange-500 dark:bg-orange-600', text: 'text-orange-700 dark:text-orange-200', lightBg: 'bg-orange-100 dark:bg-orange-900/55', border: 'border-orange-300 dark:border-orange-700', textContrast: 'text-white' },
  { bg: 'bg-violet-500 dark:bg-violet-600', text: 'text-violet-700 dark:text-violet-200', lightBg: 'bg-violet-100 dark:bg-violet-900/55', border: 'border-violet-300 dark:border-violet-700', textContrast: 'text-white' },
  { bg: 'bg-pink-500 dark:bg-pink-600', text: 'text-pink-700 dark:text-pink-200', lightBg: 'bg-pink-100 dark:bg-pink-900/55', border: 'border-pink-300 dark:border-pink-700', textContrast: 'text-white' },
];

export function getPlayerTheme(index: number) {
  if (index < 0) return { bg: 'bg-slate-400 dark:bg-slate-600', text: 'text-slate-700 dark:text-slate-300', lightBg: 'bg-slate-100 dark:bg-slate-800', border: 'border-slate-300 dark:border-slate-700', textContrast: 'text-white' };
  return PLAYER_THEMES[index % PLAYER_THEMES.length];
}

export function getFifaRankingColor(rank: number) {
  if (rank <= 10) return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800';
  if (rank <= 30) return 'bg-lime-100 text-lime-800 border-lime-200 dark:bg-lime-900/30 dark:text-lime-400 dark:border-lime-800';
  if (rank <= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800';
  if (rank <= 80) return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800';
  return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';
}

export function getStandingColor(pos: number) {
  if (pos === 1) return 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-700'; // Gold
  if (pos === 2) return 'bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-500'; // Silver
  if (pos === 3) return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-700'; // Bronze
  return 'bg-white text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
}
