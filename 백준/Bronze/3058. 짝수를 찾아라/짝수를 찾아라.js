const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  const seq = input[i]
    .split(' ')
    .map(Number)
    .filter((val) => val % 2 === 0)
    .sort((a, b) => a - b);

  console.log(
    seq.reduce((acc, cur) => acc + cur, 0),
    seq[0]
  );
}
