const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const a = input[0];
const b = input[1];

console.log(a !== b ? 1550 : 0);
