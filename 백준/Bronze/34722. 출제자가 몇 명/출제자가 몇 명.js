const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let cnt = 0;

for (let i = 1; i < n + 1; i++) {
  const [s, c, a, r] = input[i].split(' ').map(Number);
  if (s >= 1000) cnt++;
  else if (c >= 1600) cnt++;
  else if (a >= 1500) cnt++;
  else if (r >= 1 && r <= 30) cnt++;
}
console.log(cnt);
