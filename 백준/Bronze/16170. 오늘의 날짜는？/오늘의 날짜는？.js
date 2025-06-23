const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const date = new Date();

console.log(String(date.getUTCFullYear()).padStart(2, '0'));
console.log(String(date.getUTCMonth() + 1).padStart(2, '0'));
console.log(String(date.getUTCDate()).padStart(2, '0'));
