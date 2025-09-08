const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const shu = {
  Poblano: 1500,
  Mirasol: 6000,
  Serrano: 15500,
  Cayenne: 40000,
  Thai: 75000,
  Habanero: 125000,
};
let t = 0;

for (let i = 1; i < n + 1; i++) t += shu[input[i]];
console.log(t);
