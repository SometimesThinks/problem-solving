const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const check = new Map();
let cnt = 0;

for (let i = 1; i < n + 1; i++) {
  const [cow, loc] = input[i].split(' ').map(Number);

  if (check.get(cow) + loc === 1) cnt++;
  check.set(cow, loc);
}
console.log(cnt);
