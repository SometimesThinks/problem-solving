const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  const left = [];
  const right = [];
  for (const char of input[i]) {
    if (char === '<') {
      if (left.length) {
        right.push(left.pop());
      }
    } else if (char === '>') {
      if (right.length) {
        left.push(right.pop());
      }
    } else if (char === '-') {
      if (left.length) left.pop();
    } else {
      left.push(char);
    }
  }
  console.log(left.join('') + right.reverse().join(''));
}
