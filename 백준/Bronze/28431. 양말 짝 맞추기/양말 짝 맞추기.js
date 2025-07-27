const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const sockes = Array.from({ length: 10 }, () => 0);

for (const n of input.map(Number)) {
  sockes[n] += 1;
  if (sockes[n] === 2) sockes[n] = 0;
}
for (let i = 0; i < 10; i++) {
  if (sockes[i] === 1) console.log(i);
}
