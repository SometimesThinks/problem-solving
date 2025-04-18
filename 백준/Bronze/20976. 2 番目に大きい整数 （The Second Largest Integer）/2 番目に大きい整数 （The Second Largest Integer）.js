const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const nums = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

console.log(nums[1]);
