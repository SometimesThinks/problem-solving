const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const loses = input[1].split(' ').map(Number);
const joys = input[2].split(' ').map(Number);
// dp[i번째 사람까지 고려했을 경우][사용한 체력] = 최대 기쁨
const dp = Array.from({ length: n }, () =>
  Array.from({ length: 101 }, () => 0),
);
dp[0][loses[0]] = joys[0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 100; j++) {
    dp[i][j] = dp[i - 1][j];

    if (j >= loses[i]) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - loses[i]] + joys[i]);
    }
  }
}
console.log(Math.max(...dp[n - 1].slice(1, 100)));
