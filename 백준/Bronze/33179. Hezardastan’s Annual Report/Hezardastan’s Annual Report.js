const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

console.log(
  nums.reduce((acc, cur) => (acc += Math.floor((cur - 1) / 2) + 1), 0)
);
