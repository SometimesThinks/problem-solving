const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const pyramid = input.slice(1).map((e) => e.split(' ').map(Number));
const dp = [];

for (let i = 1; i < n + 1; i++) {
  dp.push(Array.from({ length: i }, () => 0));
}
dp[0][0] = pyramid[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < pyramid[i].length; j++) {
    const candi = [dp[i - 1][j], dp[i - 1][j - 1]].filter(
      (e) => e != undefined,
    );
    dp[i][j] = Math.max(...candi) + pyramid[i][j];
  }
}
console.log(Math.max(...dp[n - 1]));
