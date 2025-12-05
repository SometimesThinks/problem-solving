const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const [a, b] = input[1].split(' ').map(Number);
const res = Math.floor(a / 2) + b;

console.log(res > n ? n : res);
