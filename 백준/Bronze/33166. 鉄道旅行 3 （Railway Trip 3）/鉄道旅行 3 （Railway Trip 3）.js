const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [p, q] = input[0].split(' ').map(Number);
const [a, b] = input[1].split(' ').map(Number);
let res = 0;

if (p >= q) res = q * a;
else res = p * a + (q - p) * b;
console.log(res);
