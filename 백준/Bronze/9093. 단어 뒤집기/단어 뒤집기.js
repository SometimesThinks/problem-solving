const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  const test = input[i] + ' ';
  let stack = [];
  for (let i = 0; i < test.length; i++) {
    if (stack.length && test[i] === ' ') {
      const temp = [];
      while (stack.length && stack[stack.length - 1] !== ' ')
        temp.push(stack.pop());
      stack = stack.concat(temp);
      stack.push(' ');
    } else stack.push(test[i]);
  }
  console.log(stack.slice(0, stack.length - 1).join(''));
}
