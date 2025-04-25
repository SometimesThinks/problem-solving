const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const nums = input[0].split(' ').map(Number);
const fre = { 1: 0, 2: 0 };

nums.forEach((val) => (fre[val] = fre[val] + 1));
console.log(fre[1] > fre[2] ? 1 : 2);
