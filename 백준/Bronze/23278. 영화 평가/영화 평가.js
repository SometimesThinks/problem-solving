const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, l, h] = input[0].split(' ').map(Number);
const scores = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(
  scores.slice(l, n - h).reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0) /
    (n - l - h)
);
