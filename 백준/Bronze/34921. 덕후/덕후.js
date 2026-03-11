const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, t] = input[0].split(' ').map(Number);
const p = 10 + 2 * (25 - a + t);

console.log(p > 0 ? p : 0);
