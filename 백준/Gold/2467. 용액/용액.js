const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
let ans = [0, 0];
let diff = Infinity;
let sum = 0;
let [left, right] = [0, n - 1];

while (left < right) {
  sum = seq[left] + seq[right];
  sumAbs = Math.abs(sum);
  if (sumAbs < diff) {
    diff = sumAbs;
    ans[0] = seq[left];
    ans[1] = seq[right];
  }
  if (sum > 0) {
    right -= 1;
  } else if (sum < 0) {
    left += 1;
  } else {
    ans[0] = seq[left];
    ans[1] = seq[right];
    break;
  }
}
console.log(ans.join(' '));
