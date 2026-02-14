const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const dp = Array.from({ length: n }, () => Array.from({ length: 3 }, () => 0));
dp[0][0] = 1;
dp[0][1] = 1;
dp[0][2] = 1;

for (let i = 1; i < n; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
}
console.log(dp[n - 1].reduce((acc, cur) => acc + cur, 0) % 9901);
