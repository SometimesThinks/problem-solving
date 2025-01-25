const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
let [left, right] = [0, n - 1];
let sum = 0;
let minDiff = Infinity;
let ans = 0;

while (left < right) {
  sum = seq[left] + seq[right];
  if (Math.abs(sum) < minDiff) {
    minDiff = Math.abs(sum);
    ans = sum;
  }
  if (sum > 0) {
    right -= 1;
  } else if (sum < 0) {
    left += 1;
  } else {
    minDiff = 0;
    break;
  }
}
console.log(ans);
