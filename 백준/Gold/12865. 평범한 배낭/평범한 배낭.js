const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const stuffs = input.slice(1).map((e) => e.split(' ').map(Number));
const dp = Array.from({ length: n }, () =>
  Array.from({ length: k + 1 }, () => 0),
);

if (stuffs[0][0] <= k) {
  dp[0][stuffs[0][0]] = stuffs[0][1];
}
for (let i = 1; i < n; i++) {
  for (let j = 0; j < k + 1; j++) {
    dp[i][j] = dp[i - 1][j];
    if (j >= stuffs[i][0]) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - stuffs[i][0]] + stuffs[i][1]);
    }
  }
}
console.log(Math.max(...dp[n - 1]));
