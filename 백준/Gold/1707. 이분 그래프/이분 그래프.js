const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const k = Number(input[0]);
let idx = 1;

for (let i = 0; i < k; i++) {
  const [v, e] = input[idx++].split(' ').map(Number);
  const graph = Array.from({ length: v }, () => []);
  const visited = Array.from({ length: v }, () => 0);
  let res = 'YES';
  // input 간선 정리
  for (let i = 0; i < e; i++) {
    const [u, v] = input[idx++].split(' ').map(Number);
    graph[u - 1].push(v - 1);
    graph[v - 1].push(u - 1);
  }

  const dfs = (str, pre, val) => {
    if (str === pre) return;
    if (visited[str]) {
      if (visited[pre] === visited[str]) return (res = 'NO');
      else return;
    }
    // 1(빨강), 2(파랑) 번갈아가면서 체크
    if (val === 1) visited[str] = 2;
    else visited[str] = 1;
    // 인접 정점 같은 색인지 확인
    for (let i = 0; i < graph[str].length; i++) {
      dfs(graph[str][i], str, visited[str]);
    }
  };

  for (let i = 0; i < v; i++) {
    if (!visited[i]) dfs(i, -1, -1);
  }
  console.log(res);
}
