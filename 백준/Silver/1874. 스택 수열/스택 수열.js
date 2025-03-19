const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input.slice(1).map(Number);
const stack = [];
const ans = [];
let sPointer = 0;

for (let i = 1; i < n + 1; i++) {
  if (!stack.length || stack[stack.length - 1] <= seq[sPointer]) {
    stack.push(i);
    ans.push('+');
  }
  while (stack.length && stack[stack.length - 1] === seq[sPointer]) {
    stack.pop();
    ans.push('-');
    sPointer++;
  }
}
if (sPointer === n) console.log(ans.join('\n'));
else console.log('NO');
