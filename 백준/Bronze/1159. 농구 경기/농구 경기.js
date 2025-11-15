const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input.slice(1, n + 1).sort();
const cnt = {};
let res = '';

for (const last of seq) {
  const fir = last[0];
  cnt[fir] = (cnt[fir] || 0) + 1;
  if (cnt[fir] === 5) res += fir;
}
console.log(res ? res : 'PREDAJA');
