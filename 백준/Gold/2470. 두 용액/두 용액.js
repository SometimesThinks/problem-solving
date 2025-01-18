const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
let sum = 0;
let minSum = Infinity;
let [leftAns, rightAns] = [0, 0];
let [left, right] = [0, n - 1];

seq.sort((a, b) => a - b);
while (left < right) {
  sum = seq[left] + seq[right];
  if (Math.abs(sum) < minSum) {
    minSum = Math.abs(sum);
    [leftAns, rightAns] = [seq[left], seq[right]];
  }
  if (sum > 0) {
    right -= 1;
  } else {
    left += 1;
  }
}
console.log(leftAns, rightAns);
