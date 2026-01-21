const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
let left = 0;
let right = 0;
let res = 1;

for (let i = 0; i < n; i++) {
  if (seq[i] === 1) {
    left += 1;
    right -= 1;
  } else {
    right += 1;
    left -= 1;
  }
  if (left < 0) left = 0;
  if (right < 0) right = 0;
  if (left > res) res = left;
  if (right > res) res = right;
}
console.log(res);
