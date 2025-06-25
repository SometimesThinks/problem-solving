const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const min = [3, 20, 120];
const max = input[0]
  .split(' ')
  .map(Number)
  .reduce((acc, cur, idx) => (acc += cur * min[idx]), 0);
const mel = input[1]
  .split(' ')
  .map(Number)
  .reduce((acc, cur, idx) => (acc += cur * min[idx]), 0);

console.log(max > mel ? 'Max' : mel > max ? 'Mel' : 'Draw');
