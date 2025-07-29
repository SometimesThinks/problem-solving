const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const bread = input
  .slice(1)
  .map((e) => e.split(' ').map(Number))
  .filter((e) => e[0] <= e[1])
  .sort((a, b) => a[1] - b[1]);

console.log(bread.length ? bread[0][1] : -1);
