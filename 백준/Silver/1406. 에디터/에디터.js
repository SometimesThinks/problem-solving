const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const m = Number(input[1]);
const left = input[0].split('');
const right = [];

for (let i = 2; i < m + 2; i++) {
  const command = input[i].split(' ');
  if (command[0] === 'L') {
    if (left.length) right.push(left.pop());
  } else if (command[0] === 'D') {
    if (right.length) left.push(right.pop());
  } else if (command[0] === 'B') {
    if (left.length) left.pop();
  } else {
    left.push(command[1]);
  }
}
console.log(left.join('') + right.reverse().join(''));
