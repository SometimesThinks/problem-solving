const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const string = input[0];
const sub = input[1];
const stack = [];

for (let i = 0; i < string.length; i++) {
  stack.push(string[i]);
  if (
    stack[stack.length - 1] === sub[sub.length - 1] &&
    stack.length >= sub.length
  ) {
    const temp = [];
    for (let i = 0; i < sub.length; i++) temp.push(stack.pop());
    if (temp.reverse().join('') !== sub) {
      for (let i = 0; i < temp.length; i++) stack.push(temp[i]);
    }
  }
}
if (!stack.length) console.log('FRULA');
else console.log(stack.join(''));
