const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const roads = input[1].split(' ').map(Number);
const cities = input[2].split(' ').map(Number);
const dp = Array.from({ length: n }, () => 0);
let min = cities[0];

for (let i = 1; i < n; i++) {
  min = Math.min(min, cities[i - 1]);
  dp[i] = Math.min(
    dp[i - 1] + roads[i - 1] * min,
    dp[i - 1] + roads[i - 1] * cities[i - 1],
  );
}
console.log(dp[n - 1]);
