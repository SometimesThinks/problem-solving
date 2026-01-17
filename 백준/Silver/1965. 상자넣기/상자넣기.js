const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const boxes = input[1].split(' ').map(Number);
const dp = Array.from({ length: n }, () => 0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (boxes[i] > boxes[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(Math.max(...dp));
