const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let cnt = 0;

const lowerBound = (arr, start, end, target) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const upperBound = (arr, start, end, target) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] <= target) start = mid + 1;
    else end = mid;
  }
  return end;
};

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    const sum = seq[i] + seq[j];
    cnt += upperBound(seq, j + 1, n, -sum) - lowerBound(seq, j + 1, n, -sum);
  }
}
console.log(cnt);
