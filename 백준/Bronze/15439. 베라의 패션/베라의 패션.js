const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);

console.log(Number(input[0]) * (Number(input[0]) - 1));
