const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const roads = input[1].split(' ').map(BigInt);
const cities = input[2].split(' ').map(BigInt);
const dp = Array.from({ length: n }, () => 0n);
let min = cities[0];

for (let i = 1; i < n; i++) {
  min = min < cities[i - 1] ? min : cities[i - 1];
  dp[i] =
    dp[i - 1] + roads[i - 1] * min < dp[i - 1] + roads[i - 1] * cities[i - 1]
      ? dp[i - 1] + roads[i - 1] * min
      : dp[i - 1] + roads[i - 1] * cities[i - 1];
}
console.log(String(dp[n - 1]));
