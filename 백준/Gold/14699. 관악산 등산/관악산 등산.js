const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n: 쉼터 수, m: 길 수
const [n, m] = input[0].split(' ').map(Number);
const heights = [0, ...input[1].split(' ').map(Number)];
const graph = Array.from({ length: n + 1 }, () => []);
const memo = Array.from({ length: n + 1 }, () => 0);

for (let i = 2; i < m + 2; i++) {
  const [str, end] = input[i].split(' ').map(Number);
  graph[str].push(end);
  graph[end].push(str);
}
// 문제 풀이 시작점
const dfs = (str) => {
  if (memo[str] !== 0) return memo[str];

  let maxDepth = 1;
  for (let i = 0; i < graph[str].length; i++) {
    if (heights[graph[str][i]] > heights[str]) {
      maxDepth = Math.max(maxDepth, dfs(graph[str][i]) + 1);
    }
  }
  return (memo[str] = maxDepth);
};
for (let i = 1; i < n + 1; i++) {
  if (!memo[i]) dfs(i);
}
console.log(memo.slice(1).join('\n'));
