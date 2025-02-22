const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const tree = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => 0);
const ans = Array.from({ length: n + 1 });

for (let i = 1; i < n; i++) {
  const [str, end] = input[i].split(' ').map(Number);
  tree[str].push(end);
  tree[end].push(str);
}
const dfs = (pre, now) => {
  visited[now] = 1;
  ans[now] = pre;

  for (const vertex of tree[now]) {
    if (!visited[vertex]) dfs(now, vertex);
  }
};
dfs(0, 1);
console.log(ans.slice(2, ans.length).join('\n'));
