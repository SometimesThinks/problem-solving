const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const scores = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

console.log(scores[0] + scores[1]);
