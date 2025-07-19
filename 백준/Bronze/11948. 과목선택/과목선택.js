const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const sciences = input
  .slice(0, 4)
  .map(Number)
  .sort((a, b) => a - b);
const societies = input
  .slice(4)
  .map(Number)
  .sort((a, b) => a - b);
const sum =
  sciences.slice(1).reduce((acc, cur) => (acc += cur), 0) + societies[1];

console.log(sum);
