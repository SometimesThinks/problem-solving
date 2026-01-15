const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
let smaller = 0;
let bigger = 0;
let res = 0;

for (let i = 1; i < n; i++) {
  const diff = seq[i] - seq[i - 1];
  if (diff == 0) {
    smaller += 1;
    bigger += 1;
  } else if (diff < 0) {
    smaller += 1;
    bigger = 0;
  } else if (diff > 0) {
    bigger += 1;
    smaller = 0;
  }
  if (smaller > res) res = smaller;
  if (bigger > res) res = bigger;
}
console.log(res + 1);
