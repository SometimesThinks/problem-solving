const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const scores = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(scores[n - 1] - scores[0]);
