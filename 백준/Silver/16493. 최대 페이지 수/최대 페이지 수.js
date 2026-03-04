const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n: 남은 일수, m: 챕터의 수
const [n, m] = input[0].split(' ').map(Number);
const chap = input.slice(1).map((e) => e.split(' ').map(Number));
// dp[i번째까지 고려했을 경우][소요한 일 수] = 최대 페이지
const dp = Array.from({ length: m }, () =>
  Array.from({ length: n + 1 }, () => 0),
);
// 첫번째 요소 처리
if (chap[0][0] <= n) {
  dp[0][chap[0][0]] = chap[0][1];
}
for (let i = 1; i < m; i++) {
  for (let j = 0; j < n + 1; j++) {
    dp[i][j] = dp[i - 1][j];

    if (j >= chap[i][0]) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - chap[i][0]] + chap[i][1]);
    }
  }
}
console.log(Math.max(...dp[m - 1]));
