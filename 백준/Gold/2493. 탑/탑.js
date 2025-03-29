const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const towers = input[1].split(' ').map(Number);
const stack = []; // [값, 위치]
const res = Array.from({ length: n }, () => 0);

for (let i = 0; i < n; i++) {
  while (stack.length && towers[i] > stack[stack.length - 1][0]) stack.pop();
  if (stack.length) res[i] = stack[stack.length - 1][1];
  stack.push([towers[i], i + 1]);
}
console.log(...res);
