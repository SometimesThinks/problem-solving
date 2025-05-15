const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const [r1, c1, r2, c2] = input[1].split(' ').map(Number);
const board = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => Infinity)
);
const que = [[r1, c1, 0]];
let front = 0;
const dx = [-2, -2, 0, 0, 2, 2];
const dy = [-1, 1, -2, 2, -1, 1];
let res = -1;

board[r1][c1] = 0;
while (front < que.length) {
  const [nx, ny, cnt] = que[front++];
  if (nx === r2 && ny === c2) {
    res = cnt;
    break;
  }
  for (let i = 0; i < 6; i++) {
    const tx = nx + dx[i];
    const ty = ny + dy[i];
    if (tx >= 0 && tx < n && ty >= 0 && ty < n) {
      if (cnt + 1 < board[tx][ty]) {
        que.push([tx, ty, cnt + 1]);
        board[tx][ty] = cnt + 1;
      }
    }
  }
}
console.log(res);
