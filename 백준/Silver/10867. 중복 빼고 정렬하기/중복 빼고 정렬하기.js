const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const ans = new Set();

for (let i = 0; i < n; i++) {
  ans.add(seq[i]);
}
console.log(...ans);
