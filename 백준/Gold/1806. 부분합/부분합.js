const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const seq = input[1].split(' ').map(Number);
let sum = seq[0];
let shortest = Infinity;
let right = 0;

for (let left = 0; left < n; left++) {
  while (right < n && sum < s) {
    right += 1;
    if (right !== n) {
      sum += seq[right];
    }
  }
  if (right == n) {
    break;
  }
  shortest = Math.min(shortest, right - left + 1);
  sum -= seq[left];
}
if (shortest === Infinity) {
  shortest = 0;
}
console.log(shortest);
