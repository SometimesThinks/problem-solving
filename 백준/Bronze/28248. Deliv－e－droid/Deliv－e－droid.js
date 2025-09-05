const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [p, c] = input.map(Number);
let res = p * 50 - c * 10;

console.log(p > c ? res + 500 : res);
