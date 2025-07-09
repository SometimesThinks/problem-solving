const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const suapc = {
  1: [11, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'L', 'M']],
  2: [9, ['A', 'C', 'E', 'F', 'G', 'H', 'I', 'L', 'M']],
  3: [9, ['A', 'C', 'E', 'F', 'G', 'H', 'I', 'L', 'M']],
  4: [9, ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'L', 'M']],
  5: [8, ['A', 'C', 'E', 'F', 'G', 'H', 'L', 'M']],
  6: [8, ['A', 'C', 'E', 'F', 'G', 'H', 'L', 'M']],
  7: [8, ['A', 'C', 'E', 'F', 'G', 'H', 'L', 'M']],
  8: [8, ['A', 'C', 'E', 'F', 'G', 'H', 'L', 'M']],
  9: [8, ['A', 'C', 'E', 'F', 'G', 'H', 'L', 'M']],
  10: [8, ['A', 'B', 'C', 'F', 'G', 'H', 'L', 'M']],
};

console.log(suapc[n][0]);
console.log(...suapc[n][1]);
