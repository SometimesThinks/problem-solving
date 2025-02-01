const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const scores = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let str = 0;
let end = scores[n - 1];
let diff = Infinity;
let ans = 0;

while (str <= end) {
  let mid = Math.floor((str + end) / 2);
  let temp = 0;

  for (const score of scores) {
    if (score > mid) {
      temp += score - mid;
    }
  }
  if (temp > k) {
    str = mid + 1;
  } else {
    if (k - temp < diff) {
      diff = k - temp;
      ans = mid;
    }
    end = mid - 1;
  }
}
console.log(ans);
