const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const sumSub = [a + b, a - b].sort((a, b) => a - b);

console.log(sumSub[1]);
console.log(sumSub[0]);
