const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = input[0];
const octToBin = {
  0: '000',
  1: '001',
  2: '010',
  3: '011',
  4: '100',
  5: '101',
  6: '110',
  7: '111',
};
let bin = '';
let start = -1;

for (const digit of n) {
  bin += octToBin[digit];
}
for (let i = 0; i < bin.length; i++) {
  if (bin[i] === '1') {
    start = i;
    break;
  }
}
console.log(start >= 0 ? bin.slice(start) : '0');
