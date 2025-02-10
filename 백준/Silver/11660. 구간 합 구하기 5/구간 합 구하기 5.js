const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const origin = [];
const prefix = Array.from({ length: n }, () => Array.from({ length: n }));
// 초기값 초기화
for (let i = 1; i < n + 2; i++) origin.push(input[i].split(' ').map(Number));
// 구간 합 초기화
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    prefix[i][j] = origin[i][j];

    if (i > 0) prefix[i][j] += prefix[i - 1][j];
    if (j > 0) prefix[i][j] += prefix[i][j - 1];
    if (i > 0 && j > 0) prefix[i][j] -= prefix[i - 1][j - 1];
  }
}
// 구간 합 출력
for (let i = 0; i < m; i++) {
  const [x1, y1, x2, y2] = input[n + i + 1]
    .split(' ')
    .map((el) => Number(el) - 1);
  let ans = prefix[x2][y2];

  if (x1 > 0) ans -= prefix[x1 - 1][y2];
  if (y1 > 0) ans -= prefix[x2][y1 - 1];
  if (x1 > 0 && y1 > 0) ans += prefix[x1 - 1][y1 - 1];
  console.log(ans);
}
