import fs from 'fs';
let content = fs.readFileSync('src/components/HomeTab.tsx', 'utf8');

// 1. the rank R and size
content = content.replace(/text-\[7px\]/g, 'text-[9px]');
content = content.replace(/R\{team\.fifaRanking\}/g, '{team.fifaRanking}');
content = content.replace(/px-1 py-0\.5 rounded text-\[9px\] uppercase/g, 'px-1.5 py-0.5 rounded-sm text-[9px] uppercase');

// 2. the points out of place
content = content.replace(/min-w-\[2\.5rem\] ml-2 \$\{theme\.lightBg\}/g, 'min-w-[2.5rem] ml-2 shrink-0 ${theme.lightBg}');

fs.writeFileSync('src/components/HomeTab.tsx', content);
