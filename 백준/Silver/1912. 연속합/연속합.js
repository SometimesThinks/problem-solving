const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const dp = Array.from({ length: n }, () => 0);
let res = seq[0];

dp[0] = seq[0];
for (let i = 1; i < n; i++) {
  if (dp[i - 1] > 0) dp[i] = dp[i - 1] + seq[i];
  else dp[i] = seq[i];
  if (dp[i] > res) res = dp[i];
}
console.log(res);
