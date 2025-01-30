const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const levels = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
let str = levels[0];
let end = levels[n - 1] + k;
let ans = 0;

while (str <= end) {
  let t = 0;
  let mid = Math.floor((str + end) / 2);
  for (const level of levels) {
    if (mid > level) {
      t += mid - level;
    }
  }
  if (t > k) {
    end = mid - 1;
  } else {
    if (mid > ans) {
      ans = mid;
    }
    str = mid + 1;
  }
}
console.log(end);
