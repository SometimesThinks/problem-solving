const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const res = [];
let idx = 0;

while (true) {
  const n = Number(input[idx++]);
  if (!n) break;
  const seq = input.slice(idx, idx + n).map(Number);
  idx += n;
  const dp = Array.from({ length: n }, () => 0);
  dp[0] = seq[0];
  let max = seq[0];

  for (let i = 1; i < n; i++) {
    if (dp[i - 1] > 0) dp[i] = dp[i - 1] + seq[i];
    else dp[i] = seq[i];
    if (dp[i] > max) max = dp[i];
  }
  res.push(max);
}
console.log(res.join('\n'));
