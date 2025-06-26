const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const container = input[1]
  .split(' ')
  .map(Number)
  .reduce((acc, cur) => (acc += cur), 0);

console.log(container === 0 ? 'Stay' : container > 0 ? 'Right' : 'Left');
