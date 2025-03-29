const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const express = input[0]
  .replaceAll('()', 2)
  .replaceAll('[]', 3)
  .split('')
  .map((char) => {
    if (char === '2') return Number(char);
    else if (char === '3') return Number(char);
    else return char;
  });
const stack = [];

for (let i = 0; i < express.length; i++) {
  const exp = express[i];
  let temp = 0;
  if (exp === ')') {
    if (!stack.length) break;
    while (stack.length && stack[stack.length - 1] !== '(') {
      temp += stack.pop();
    }
    if (stack.length && stack[stack.length - 1] === '(') {
      stack.pop();
      stack.push(temp * 2);
    } else break;
  } else if (exp === ']') {
    if (!stack.length) break;
    while (stack.length && stack[stack.length - 1] !== '[') {
      temp += stack.pop();
    }
    if (stack.length && stack[stack.length - 1] === '[') {
      stack.pop();
      stack.push(temp * 3);
    } else break;
  } else stack.push(exp);
}
if (!stack.length) console.log(0);
else {
  const sum = stack.reduce((acc, cur) => acc + cur, 0);
  if (isNaN(sum)) console.log(0);
  else console.log(sum);
}
