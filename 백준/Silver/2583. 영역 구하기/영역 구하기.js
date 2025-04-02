const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// m: 행의 수, n: 열의 수, k: 직사각형 수
const [m, n, k] = input[0].split(' ').map(Number);
const matrix = Array.from({ length: m }, () =>
  Array.from({ length: n }, () => 1)
);
// input 영역 채우기
for (let i = 1; i < k + 1; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
  for (let r = y1; r < y2; r++) {
    for (let c = x1; c < x2; c++) {
      matrix[r][c] = 0;
    }
  }
}
// 문제 풀이 시작점
const ans = [];
const visited = Array.from({ length: m }, () =>
  Array.from({ length: n }, () => 0)
);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const dfs = (x, y) => {
  let cnt = 1;
  visited[x][y] = 1;
  for (let i = 0; i < 4; i++) {
    tx = x + dx[i];
    ty = y + dy[i];
    if (
      tx >= 0 &&
      tx < m &&
      ty >= 0 &&
      ty < n &&
      !visited[tx][ty] &&
      matrix[tx][ty]
    ) {
      cnt += dfs(tx, ty);
    }
  }
  return cnt;
};
// 영역별 dfs 호출
for (let r = 0; r < m; r++) {
  for (let c = 0; c < n; c++) {
    if (!visited[r][c] && matrix[r][c]) {
      ans.push(dfs(r, c));
    }
  }
}
console.log(ans.length);
console.log(...ans.sort((a, b) => a - b));
