const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const stack = [];
const nges = Array.from({ length: n }, () => -1);

for (let i = seq.length - 1; i >= 0; i--) {
  const num = seq[i];
  if (!stack.length) {
    stack.push(num);
    continue;
  }
  while (stack.length && stack[stack.length - 1] <= num) stack.pop();
  if (stack.length) nges[i] = stack[stack.length - 1];
  stack.push(num);
}
console.log(...nges);
