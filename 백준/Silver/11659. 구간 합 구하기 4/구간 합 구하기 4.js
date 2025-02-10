const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const seq = [0, ...input[1].split(' ').map(Number)];

for (let i = 1; i < n + 1; i++) {
  seq[i] += seq[i - 1];
}
for (let k = 2; k < m + 2; k++) {
  const [i, j] = input[k].split(' ').map((el) => Number(el));

  console.log(seq[j] - seq[i - 1]);
}
