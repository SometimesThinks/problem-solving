const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const res = [];
let idx = 1;

for (let i = 0; i < t; i++) {
  const [n, m] = input[idx++].split(' ').map(Number);
  const graph = Array.from({ length: n }, () => []);
  // input 정리
  for (let i = 0; i < m; i++) {
    const [x, y] = input[idx++].split(' ').map((el) => Number(el) - 1);
    graph[x].push(y);
    graph[y].push(x);
  }
  // 문제 풀이 시작점
  const visited = Array.from({ length: n }, () => 0);
  let ans = 'possible';
  const dfs = (str, pre) => {
    if (str === pre) return;
    if (visited[str]) {
      if (visited[str] === visited[pre]) return (ans = 'impossible');
      else return;
    }
    // 1(빨강색), 2(파란색) 번갈아가며 색칠하기
    visited[str] = visited[pre] !== 1 ? 1 : 2;
    // dfs 재호출
    for (let i = 0; i < graph[str].length; i++) {
      dfs(graph[str][i], str);
    }
  };
  // 각 node마다 dfs 호출
  for (let i = 0; i < n; i++) dfs(i, -1);
  res.push(ans);
}
console.log(res.join('\n'));
