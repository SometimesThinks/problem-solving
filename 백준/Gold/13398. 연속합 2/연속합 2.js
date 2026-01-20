const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const dp = Array.from({ length: n }, () => Array.from({ length: 2 }, () => 0));
let res = seq[0];
dp[0][0] = dp[0][1] = seq[0];

for (let i = 1; i < n; i++) {
  dp[i][0] = Math.max(dp[i - 1][0] + seq[i], seq[i]);
  dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + seq[i]);
  if (res < dp[i][0]) res = dp[i][0];
  if (res < dp[i][1]) res = dp[i][1];
}
console.log(res);
