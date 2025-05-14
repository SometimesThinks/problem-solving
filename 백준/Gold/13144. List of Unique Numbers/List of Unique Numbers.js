const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const numSet = new Set();
let left = (right = 0);
let cnt = 0;

while (left < n) {
  while (right < n && !numSet.has(seq[right])) {
    numSet.add(seq[right]);
    cnt += right - left + 1;
    right++;
  }
  numSet.delete(seq[left]);
  left++;
}
console.log(cnt);
