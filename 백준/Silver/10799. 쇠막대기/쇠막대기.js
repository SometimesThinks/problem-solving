const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const express = input[0].split('');
const stack = [];
let res = 0;

for (let i = 0; i < express.length; i++) {
  if (express[i] === '(') {
    stack.push(express[i]);
  } else {
    stack.pop();
    if (express[i - 1] === ')') res += 1;
    else res += stack.length;
  }
}
console.log(res);
