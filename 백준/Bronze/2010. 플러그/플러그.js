const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let cnt = input
  .slice(1, n + 1)
  .map((val, idx) => (idx === 0 ? Number(val) : Number(val) - 1))
  .reduce((acc, cur) => acc + cur, 0);

console.log(cnt);
