const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const sequence = input.slice(1).map(Number);
let minDiffer = Infinity;
let right = 0;

sequence.sort((a, b) => a - b);
for (let left = 0; left < n; left++) {
  while (right < n && sequence[right] - sequence[left] < m) {
    right += 1;
  }
  if (right === n) {
    break;
  }
  minDiffer = Math.min(minDiffer, sequence[right] - sequence[left]);
}
console.log(minDiffer);
