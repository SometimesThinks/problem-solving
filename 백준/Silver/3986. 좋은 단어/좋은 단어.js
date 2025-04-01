const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let cnt = 0;

for (let i = 1; i < n + 1; i++) {
  const voca = input[i];
  const stack = [];

  for (let i = 0; i < voca.length; i++) {
    if (stack[stack.length - 1] === voca[i]) stack.pop();
    else stack.push(voca[i]);
  }
  if (!stack.length) cnt++;
}
console.log(cnt);
