const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const x = Number(input[2]);
let left = 0;
let right = n - 1;
let sum = 0;
let cnt = 0;

seq.sort((a, b) => a - b);
while (left < n && left < right) {
  sum = seq[left] + seq[right];
  if (sum === x) {
    cnt += 1;
    right -= 1;
  } else if (sum < x) {
    left += 1;
  } else {
    right -= 1;
  }
}
console.log(cnt);
