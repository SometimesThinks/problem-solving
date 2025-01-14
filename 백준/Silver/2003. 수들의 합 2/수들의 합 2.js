const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const seq = input[1].split(' ').map(Number);
let sum = seq[0];
let caseCnt = 0;
let right = 0;

for (let left = 0; left < n; left++) {
  while (right < n && sum < m) {
    right += 1;
    sum += seq[right];
  }
  if (right === n && sum < m) {
    break;
  }
  if (sum === m) {
    caseCnt += 1;
  }
  sum -= seq[left];
}
console.log(caseCnt);
