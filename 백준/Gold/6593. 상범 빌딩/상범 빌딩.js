const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let line = 0;
while (line < input.length) {
  // l: 층, r: 행, c: 열
  const [l, r, c] = input[line].split(' ').map(Number);
  if (l < 1 || r < 1 || c < 1) break;
  const building = [];
  const visited = Array.from({ length: l }, () =>
    Array.from({ length: r }, () => Array.from({ length: c }, () => 0))
  );
  line++;
  for (let i = 0; i < l; i++) {
    const floor = [];
    for (let j = 0; j < r; j++) {
      floor.push(input[line].split(''));
      line++;
    }
    building.push(floor);
    line++;
  }
  // 문제 풀이 시작점
  const que = [];
  let pointer = 0;
  let found = 0;
  // 시작점 탐색
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < r; j++) {
      for (let k = 0; k < c; k++) {
        if (building[i][j][k] === 'S') {
          que.push([i, j, k, 0]);
          visited[i][j][k] = 1;
        }
      }
    }
  }
  while (pointer < que.length) {
    const [nl, nr, nc, nt] = que[pointer++];
    const dz = [-1, 1, 0, 0, 0, 0];
    const dx = [0, 0, 0, 0, -1, 1];
    const dy = [0, 0, -1, 1, 0, 0];

    if (building[nl][nr][nc] === 'E') {
      console.log(`Escaped in ${nt} minute(s).`);
      found = 1;
    }
    for (let i = 0; i < 6; i++) {
      const [tempL, tempR, tempC] = [nl + dz[i], nr + dx[i], nc + dy[i]];

      if (
        tempL >= 0 &&
        tempL < l &&
        tempR >= 0 &&
        tempR < r &&
        tempC >= 0 &&
        tempC < c &&
        !visited[tempL][tempR][tempC] &&
        building[tempL][tempR][tempC] !== '#'
      ) {
        que.push([tempL, tempR, tempC, nt + 1]);
        visited[tempL][tempR][tempC] = 1;
      }
    }
  }
  !found && console.log('Trapped!');
}
