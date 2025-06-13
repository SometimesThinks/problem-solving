const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

console.log((n * (n + 1)) / 2);
console.log(((n * (n + 1)) / 2) ** 2);
console.log(
  Array.from({ length: n }, (val, idx) => (idx + 1) ** 3).reduce(
    (cur, acc) => acc + cur,
    0
  )
);
