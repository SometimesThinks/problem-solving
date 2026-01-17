const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const an = [0, ...input[1].split(' ').map(Number)];
const dp = Array.from({ length: n + 1 }, () => 0);

for (let i = 1; i < n + 1; i++) {
  let best = 0;
  for (let j = 0; j < i; j++) {
    if (an[i] > an[j]) {
      if (dp[j] > best) best = dp[j];
    }
  }
  dp[i] = best + 1;
}
console.log(dp.sort((a, b) => b - a)[0]);
