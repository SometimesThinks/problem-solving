const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

console.log(Math.min(...input.slice(0, 3)) + Math.min(...input.slice(3)) - 50);
