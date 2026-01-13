const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const [r, c, d] = input[1].split(' ').map(Number);
const matrix = input.slice(2).map((r) => r.split(' ').map(Number));
// 북, 동, 남, 서 순서
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let cnt = 0;
const dfs = (y, x, d) => {
  if (matrix[y][x] === 0) {
    matrix[y][x] = 2;
    cnt++;
  }
  let needClean = false;
  // 주변 4칸 청소 여부 확인
  for (let i = 0; i < 4; i++) {
    const ty = y + dy[i];
    const tx = x + dx[i];

    if (ty >= 0 && ty < n && tx >= 0 && tx < m) {
      if (matrix[ty][tx] === 0) {
        needClean = true;
        break;
      }
    }
  }
  // 주변 4칸 중 청소되지 않은 빈 킨이 있는 경우
  if (needClean) {
    let td = (d + 3) % 4;
    const ty = y + dy[td];
    const tx = x + dx[td];

    if (ty >= 0 && ty < n && tx >= 0 && tx < m) {
      if (matrix[ty][tx] === 0) dfs(ty, tx, td);
      else dfs(y, x, td);
    } else {
      dfs(y, x, td);
    }
  } else {
    // 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우
    const back = (d + 2) % 4;
    const ty = y + dy[back];
    const tx = x + dx[back];

    if (ty >= 0 && ty < n && tx >= 0 && tx < m) {
      if (matrix[ty][tx] !== 1) dfs(ty, tx, d);
      else return;
    } else {
      return;
    }
  }
};
dfs(r, c, d);
console.log(cnt);
