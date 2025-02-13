const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// f: 총 층 수, g: 스타트링크, s: 현재 층, u: 위, d: 아래
const [f, s, g, u, d] = input[0].split(' ').map(Number);
const bfs = (str) => {
  const que = [];
  const visited = Array.from({ length: f + 1 }, () => 0);
  // 현재 층, 버튼 횟수
  que.push([str, 0]);
  visited[str] = 1;
  while (que.length) {
    const [now, cnt] = que.shift();

    if (now === g) return cnt;
    for (const btn of [u, -d]) {
      const tempLo = now + btn;

      if (tempLo > 0 && tempLo <= f && !visited[tempLo]) {
        que.push([tempLo, cnt + 1]);
        visited[tempLo] = 1;
      }
    }
  }
  return 'use the stairs';
};
console.log(bfs(s));
