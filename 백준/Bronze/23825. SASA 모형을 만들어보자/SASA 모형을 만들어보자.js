const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const [s, a] = [Math.floor(n / 2), Math.floor(m / 2)];

console.log(s > a ? a : s);
