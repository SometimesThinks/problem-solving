const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const prizes = [];

for (let i = 1; i < n + 1; i++) {
  const seq = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  if (seq[0] === seq[2]) {
    prizes.push(10000 + seq[0] * 1000);
  } else if (seq[0] === seq[1]) {
    prizes.push(1000 + seq[0] * 100);
  } else if (seq[1] === seq[2]) {
    prizes.push(1000 + seq[1] * 100);
  } else {
    prizes.push(seq[2] * 100);
  }
}
console.log(prizes.sort((a, b) => b - a)[0]);
