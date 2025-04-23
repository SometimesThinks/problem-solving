const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// m: 가로 칸의 수, n: 세로 칸의 수, h: 쌓아올려지는 상자의 수
const [m, n, h] = input[0].split(' ').map(Number);
const boxes = [];
// input 정리
for (let i = 0; i < h; i++) {
  const floor = [];
  for (let j = 1; j < n + 1; j++)
    floor.push(input[i * n + j].split(' ').map(Number));
  boxes.push(floor);
}
// 문제 풀이 시작점
const que = [];
const visited = Array.from({ length: h }, () =>
  Array.from({ length: n }, () => Array.from({ length: m }, () => 0))
);
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
const check = (matrix) => {
  let maxDay = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (matrix[i][j][k] === 0 && visited[i][j][k] === 0) {
          return -1;
        } else {
          if (visited[i][j][k] > maxDay) maxDay = visited[i][j][k];
        }
      }
    }
  }
  return maxDay;
};
let idx = 0;

for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++)
      if (boxes[i][j][k] === 1) que.push([i, j, k, 0]);
  }
}
while (idx < que.length) {
  const [nz, ny, nx, nd] = que[idx++];
  for (let i = 0; i < 6; i++) {
    const tz = nz + dz[i];
    const ty = ny + dy[i];
    const tx = nx + dx[i];
    if (tx >= 0 && tx < m && ty >= 0 && ty < n && tz >= 0 && tz < h) {
      if (boxes[tz][ty][tx] === 0 && visited[tz][ty][tx] === 0) {
        que.push([tz, ty, tx, nd + 1]);
        visited[tz][ty][tx] = nd + 1;
      }
    }
  }
}
console.log(check(boxes));
