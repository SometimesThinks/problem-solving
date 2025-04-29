const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
let line = 0;
let t = 1;

while (true) {
  const n = Number(input[line++]);
  if (!n) break;
  const secretSanta = {};
  const visited = {};
  let cnt = 0;
  // input 정리
  for (let i = 0; i < n; i++) {
    const [str, end] = input[line++].split(' ');
    secretSanta[str] = end;
    visited[str] = 0;
  }
  // 문제 풀이 시작점
  for (const name of Object.keys(visited)) {
    const stack = [];
    if (!visited[name]) {
      let cur = name;
      while (!visited[cur]) {
        visited[cur] = 1;
        stack.push(cur);
        cur = secretSanta[cur];
      }
      stack.push(cur);
    }
    if (stack.length !== new Set(stack).size) cnt++;
  }
  console.log(t, cnt);
  t++;
}
