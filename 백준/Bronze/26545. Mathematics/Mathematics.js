const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number);

console.log(arr.reduce((acc, cur) => acc + cur, 0));
