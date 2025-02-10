const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const oriMat = [];
const accMat = Array.from({ length: n }, () => Array.from({ length: m }));
const k = Number(input[n + 1]);
// 2차원 배열 입력 처리
for (let i = 1; i < n + 1; i++) {
  oriMat.push(input[i].split(' ').map(Number));
}
// 2차원 배열 누적합
accMat[0][0] = oriMat[0][0];
for (let r = 0; r < n; r++) {
  for (let c = 0; c < m; c++) {
    accMat[r][c] = oriMat[r][c];
    if (r > 0) {
      accMat[r][c] += accMat[r - 1][c];
    }
    if (c > 0) {
      accMat[r][c] += accMat[r][c - 1];
    }
    if (r > 0 && c > 0) {
      accMat[r][c] -= accMat[r - 1][c - 1];
    }
  }
}
// 2차원 배열 부분 합 출력
for (let l = 0; l < k; l++) {
  const [i, j, x, y] = input[n + l + 2].split(' ').map((el) => Number(el) - 1);
  let res = accMat[x][y];

  if (i > 0) {
    res -= accMat[i - 1][y];
  }
  if (j > 0) {
    res -= accMat[x][j - 1];
  }
  if (i > 0 && j > 0) {
    res += accMat[i - 1][j - 1];
  }
  console.log(res);
}
