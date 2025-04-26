const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;
// '.': 빈 공간, '#': 벽, '@': 상근이의 시작 위치, '*': 불
while (idx < input.length) {
  const [w, h] = input[idx].split(' ').map(Number);
  const matrix = input.slice(idx + 1, idx + h + 1);
  const fireQue = [];
  const fireVisited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => 0)
  );
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let myPos = Array.from({ length: 2 });
  let fireFnt = 0;
  let ans = 'IMPOSSIBLE';
  // 상근 위치, 불 위치 찾기
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (matrix[r][c] === '@') {
        myPos[0] = c;
        myPos[1] = r;
      }
      if (matrix[r][c] === '*') fireQue.push([c, r, 0]);
    }
  }
  // 불 옮김 기록
  while (fireFnt < fireQue.length) {
    const [nx, ny, nt] = fireQue[fireFnt++];

    for (let i = 0; i < 4; i++) {
      const tx = nx + dx[i];
      const ty = ny + dy[i];
      if (tx >= 0 && tx < w && ty >= 0 && ty < h) {
        if (
          (!fireVisited[ty][tx] && matrix[ty][tx] === '.') ||
          matrix[ty][tx] === '@'
        ) {
          fireQue.push([tx, ty, nt + 1]);
          fireVisited[ty][tx] = nt + 1;
        }
      }
    }
  }
  // 상근 탈출 가능 여부 확인
  const sangQue = [[myPos[0], myPos[1], 0]];
  const sangVisited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => 0)
  );
  let sangFnt = 0;

  while (sangFnt < sangQue.length) {
    const [nx, ny, nt] = sangQue[sangFnt++];

    if (nx === 0 || nx === w - 1 || ny === 0 || ny === h - 1) {
      if (!fireVisited[ny][nx] || nt < fireVisited[ny][nx]) {
        ans = nt + 1;
        break;
      }
    }
    for (let i = 0; i < 4; i++) {
      const tx = nx + dx[i];
      const ty = ny + dy[i];
      if (tx >= 0 && tx < w && ty >= 0 && ty < h) {
        if (!sangVisited[ty][tx] && matrix[ty][tx] === '.') {
          sangQue.push([tx, ty, nt + 1]);
          sangVisited[ty][tx] = nt + 1;
        }
      }
    }
  }
  console.log(ans);
  idx += h + 1;
}
