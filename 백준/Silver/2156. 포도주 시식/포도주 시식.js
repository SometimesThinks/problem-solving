const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input.slice(1).map(Number);
const dp = Array.from({ length: n }, () => 0);
let res = 0;
// n > 2일 때만 DP 배열 0, 1 인덱스 접근 및 초기화
if (n > 2) {
  dp[0] = seq[0];
  dp[1] = seq[0] + seq[1];
} else {
  res = seq.reduce((acc, cur) => acc + cur, 0);
}
// n > 2 일 때만 동작
for (let i = 2; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    seq[i] + seq[i - 1] + (dp[i - 3] ?? 0),
    seq[i] + dp[i - 2],
  );
  if (dp[i] > res) res = dp[i];
}
console.log(res);
