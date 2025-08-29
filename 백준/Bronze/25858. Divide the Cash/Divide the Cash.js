const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, d] = input[0].split(' ').map(Number);
const nums = input.slice(1).map(Number);
const sum = nums.reduce((acc, cur) => (acc += cur), 0);
const per = d / sum;

for (let i = 0; i < n; i++) console.log(per * nums[i]);
