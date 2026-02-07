const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const x = Number(input[0]);

console.log(x >= 13 ? x + 1 : x);
