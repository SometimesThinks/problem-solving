const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const cnts = {};

for (let i = 0; i < n; i++) {
  cnts[seq[i]] = (cnts[seq[i]] || 0) + 1;
}
console.log(Math.max(...Object.values(cnts)));
