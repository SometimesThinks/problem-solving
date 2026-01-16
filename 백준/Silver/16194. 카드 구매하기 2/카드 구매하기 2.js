const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const cards = input[1].split(' ').map(Number);
const dp = Array.from({ length: n + 1 }, () => 0);
dp[0] = 0;
dp[1] = cards[0];

for (let i = 2; i < n + 1; i++) {
  let min = 10001;
  for (let j = 1; j < Math.floor(i / 2) + 1; j++) {
    const temp = dp[j] + dp[i - j];
    if (temp < min) min = temp;
  }
  if (cards[i - 1] < min) dp[i] = cards[i - 1];
  else dp[i] = min;
}
console.log(dp[n]);
