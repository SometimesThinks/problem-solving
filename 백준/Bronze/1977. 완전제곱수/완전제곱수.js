const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const m = Number(input[0]);
const n = Number(input[1]);
const seq = [];

for (let i = m; i < n + 1; i++) {
  if (Number.isInteger(Math.sqrt(i))) seq.push(i);
}
console.log(
  seq.length ? `${seq.reduce((acc, cur) => acc + cur, 0)}\n${seq[0]}` : -1
);
