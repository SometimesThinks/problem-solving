const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const res = [];

for (let i = 0; i < t; i++) {
  const n = input[i * 2 + 1];
  const seq = input[i * 2 + 2].split(' ').map((el) => el - 1);
  const visited = Array.from({ length: n }, () => 0);
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];
    if (!visited[i]) {
      let cur = i;
      while (!visited[cur]) {
        visited[cur] = 1;
        stack.push(cur);
        cur = seq[cur];
      }
      stack.push(cur);
    }
    if (stack.length !== new Set(stack).size) cnt++;
  }
  res.push(cnt);
}
console.log(res.join('\n'));
