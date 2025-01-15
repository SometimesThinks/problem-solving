const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
const seq = input[2].split(' ').map(Number);
let sum = 0;
let cnt = 0;
let left = 0;
let right = n - 1;

seq.sort((a, b) => a - b);
while (left < n && right > left) {
  sum = seq[left] + seq[right];
  if (sum < m) {
    left += 1;
  } else if (sum > m) {
    right -= 1;
  } else {
    cnt += 1;
    right -= 1;
  }
}
console.log(cnt);
