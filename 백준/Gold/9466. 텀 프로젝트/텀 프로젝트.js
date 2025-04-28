const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const res = [];

for (let i = 0; i < t; i++) {
  const n = Number(input[2 * i + 1]);
  const students = input[2 * i + 2].split(' ').map((el) => Number(el) - 1);
  const visited = Array.from({ length: n }, () => 0);
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];
    if (!visited[i]) {
      let cur = i;
      while (!visited[cur]) {
        visited[cur] = 1;
        stack.push(cur);
        cur = students[cur];
      }
      stack.push(cur);
    }
    // 중복 있음 -> 싸이클 형성
    if (stack.length !== new Set(stack).size) {
      const last = stack.pop();
      const start = stack.findIndex((el) => el === last);
      cnt += stack.length - start;
    }
  }
  res.push(n - cnt);
}
console.log(res.join('\n'));
