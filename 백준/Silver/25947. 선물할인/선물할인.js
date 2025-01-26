const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, b, a] = input[0].split(' ').map(Number);
const gifts = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const accGifts = Array(n).fill(0);
const saleGifts = Array(n).fill(0);
accGifts[0] = gifts[0];
saleGifts[0] = gifts[0] / 2;
let ans = 0;

for (let i = 1; i < n; i++) {
  accGifts[i] = accGifts[i - 1] + gifts[i];
  saleGifts[i] = saleGifts[i - 1] + gifts[i] / 2;
}
for (let i = n; i > -1; i--) {
  let sum = 0;
  if (i <= a - 1) {
    sum = saleGifts[i];
  } else {
    sum = saleGifts[i] - saleGifts[i - a] + accGifts[i - a];
  }
  if (sum <= b) {
    ans = i + 1;
    break;
  }
}
console.log(ans);
