const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const matrix = input.slice(1).map((e) => e.split(' ').map(Number));
const dp = Array.from({ length: 2 }, () => Array.from({ length: n }, () => 0));
const temp = Array.from({ length: n }, () => 0);
dp[0] = matrix[0].slice(0);
dp[1] = matrix[0].slice(0);

for (let i = 1; i < n; i++) {
  // 최댓값 계산
  temp[0] = Math.max(dp[0][0], dp[0][1]) + matrix[i][0];
  temp[1] = Math.max(...dp[0]) + matrix[i][1];
  temp[2] = Math.max(dp[0][1], dp[0][2]) + matrix[i][2];
  dp[0][0] = temp[0];
  dp[0][1] = temp[1];
  dp[0][2] = temp[2];
  // 최솟값 계산
  temp[0] = Math.min(dp[1][0], dp[1][1]) + matrix[i][0];
  temp[1] = Math.min(...dp[1]) + matrix[i][1];
  temp[2] = Math.min(dp[1][1], dp[1][2]) + matrix[i][2];
  dp[1][0] = temp[0];
  dp[1][1] = temp[1];
  dp[1][2] = temp[2];
}
console.log(Math.max(...dp[0]), Math.min(...dp[1]));
