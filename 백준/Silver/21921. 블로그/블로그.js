const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const visits = input[1].split(' ').map(Number);
let visitMax = 0;
let visitCnt = [];
let sum = 0;
let right = 0;

for (let left = 0; left < n; left++) {
  while (right < x) {
    sum += visits[right];
    right += 1;
  }
  if (sum > visitMax) {
    visitMax = sum;
    visitCnt = [right - left];
  } else if (sum === visitMax) {
    visitCnt.push(right - left);
  }
  if (right === n) {
    break;
  }
  sum -= visits[left];
  sum += visits[right];
  right += 1;
}
if (visitMax) {
  console.log(visitMax);
  console.log(visitCnt.length);
} else {
  console.log('SAD');
}
