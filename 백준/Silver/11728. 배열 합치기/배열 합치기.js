const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n: 배열 a 크기, m: 배열 b 크기
const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
const ans = [];
let aIdx = 0;
let bIdx = 0;

while (aIdx < n || bIdx < m) {
  if (aIdx >= n) {
    while (bIdx < m) {
      ans.push(b[bIdx]);
      bIdx += 1;
    }
    break;
  } else if (bIdx >= m) {
    while (aIdx < n) {
      ans.push(a[aIdx]);
      aIdx += 1;
    }
    break;
  }
  if (a[aIdx] <= b[bIdx]) {
    ans.push(a[aIdx]);
    aIdx += 1;
  } else {
    ans.push(b[bIdx]);
    bIdx += 1;
  }
}
console.log(ans.join(' '));
