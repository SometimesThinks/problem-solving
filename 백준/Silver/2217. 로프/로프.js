const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const ropes = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);
let res = ropes[0];

for (let i = 0; i < n; i++) {
  res = Math.max(res, ropes[i] * (i + 1));
}
console.log(res);
