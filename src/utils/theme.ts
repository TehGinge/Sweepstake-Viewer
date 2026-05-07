export const PLAYER_THEMES = [
  { bg: 'bg-blue-500 dark:bg-blue-600', text: 'text-blue-600 dark:text-blue-400', lightBg: 'bg-blue-50 dark:bg-blue-900/30', border: 'border-blue-200 dark:border-blue-800', textContrast: 'text-white' },
  { bg: 'bg-rose-500 dark:bg-rose-600', text: 'text-rose-600 dark:text-rose-400', lightBg: 'bg-rose-50 dark:bg-rose-900/30', border: 'border-rose-200 dark:border-rose-800', textContrast: 'text-white' },
  { bg: 'bg-amber-500 dark:bg-amber-600', text: 'text-amber-600 dark:text-amber-400', lightBg: 'bg-amber-50 dark:bg-amber-900/30', border: 'border-amber-200 dark:border-amber-800', textContrast: 'text-amber-900 dark:text-white' },
  { bg: 'bg-emerald-500 dark:bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400', lightBg: 'bg-emerald-50 dark:bg-emerald-900/30', border: 'border-emerald-200 dark:border-emerald-800', textContrast: 'text-white' },
  { bg: 'bg-fuchsia-500 dark:bg-fuchsia-600', text: 'text-fuchsia-600 dark:text-fuchsia-400', lightBg: 'bg-fuchsia-50 dark:bg-fuchsia-900/30', border: 'border-fuchsia-200 dark:border-fuchsia-800', textContrast: 'text-white' },
  { bg: 'bg-cyan-500 dark:bg-cyan-600', text: 'text-cyan-600 dark:text-cyan-400', lightBg: 'bg-cyan-50 dark:bg-cyan-900/30', border: 'border-cyan-200 dark:border-cyan-800', textContrast: 'text-cyan-900 dark:text-white' },
  { bg: 'bg-indigo-500 dark:bg-indigo-600', text: 'text-indigo-600 dark:text-indigo-400', lightBg: 'bg-indigo-50 dark:bg-indigo-900/30', border: 'border-indigo-200 dark:border-indigo-800', textContrast: 'text-white' },
  { bg: 'bg-orange-500 dark:bg-orange-600', text: 'text-orange-600 dark:text-orange-400', lightBg: 'bg-orange-50 dark:bg-orange-900/30', border: 'border-orange-200 dark:border-orange-800', textContrast: 'text-white' },
  { bg: 'bg-violet-500 dark:bg-violet-600', text: 'text-violet-600 dark:text-violet-400', lightBg: 'bg-violet-50 dark:bg-violet-900/30', border: 'border-violet-200 dark:border-violet-800', textContrast: 'text-white' },
  { bg: 'bg-pink-500 dark:bg-pink-600', text: 'text-pink-600 dark:text-pink-400', lightBg: 'bg-pink-50 dark:bg-pink-900/30', border: 'border-pink-200 dark:border-pink-800', textContrast: 'text-white' },
];

export function getPlayerTheme(index: number) {
  if (index < 0) return { bg: 'bg-slate-300 dark:bg-slate-600', text: 'text-slate-500 dark:text-slate-400', lightBg: 'bg-slate-100 dark:bg-slate-800', border: 'border-slate-200 dark:border-slate-700', textContrast: 'text-slate-700 dark:text-slate-200' };
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
