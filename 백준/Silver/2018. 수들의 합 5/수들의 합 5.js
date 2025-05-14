const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let left = 1;
let right = 1;
let sum = 0;
let cnt = 0;

while (left <= right && right <= n + 1) {
  if (sum < n) sum += right++;
  if (sum >= n) {
    if (sum === n) cnt++;
    sum -= left++;
  }
}
console.log(cnt);
