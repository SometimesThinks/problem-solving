const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
let ans = 0;

if (b >= c) ans = Math.floor((a * b) / c);
else ans = Math.floor((a / b) * c);

console.log(ans);
