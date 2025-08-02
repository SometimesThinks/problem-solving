const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const number = input.map(Number);
let res = 'answer';

if (
  [8, 9].includes(number[0]) &&
  [8, 9].includes(number[3]) &&
  number[1] === number[2]
) {
  res = 'ignore';
}
console.log(res);
