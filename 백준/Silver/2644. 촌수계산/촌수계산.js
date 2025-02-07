const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const [p1, p2] = input[1].split(' ').map(Number);
const m = Number(input[2]);
const relations = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => 0);
const dfs = (str, cnt) => {
  visited[str] = 1;

  if (str === p2) {
    return cnt;
  }
  for (const vertex of relations[str]) {
    if (!visited[vertex]) {
      const result = dfs(vertex, cnt + 1);

      if (result !== -1) {
        return result;
      }
    }
  }
  return -1;
};

for (let i = 3; i < 3 + m; i++) {
  const [par, chi] = input[i].split(' ').map(Number);
  // 부모 - 자식 관계
  relations[par].push(chi);
  relations[chi].push(par);
}
console.log(dfs(p1, 0));
