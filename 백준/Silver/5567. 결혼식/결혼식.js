const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
const rel = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => 0);
let ans = 0;
const bfs = (str, depth) => {
  const que = [[str, depth]];
  // que가 빌 때까지 탐색
  while (que.length !== 0) {
    const [temp, dep] = que.shift();

    if (dep > 0 && dep <= 2) {
      ans += 1;
    }
    for (const ver of rel[temp]) {
      if (!visited[ver]) {
        que.push([ver, dep + 1]);
        visited[ver] = 1;
      }
    }
  }
};

for (let i = 2; i < m + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  rel[a].push(b);
  rel[b].push(a);
}
visited[1] = 1;
bfs(1, 0);
console.log(ans);
