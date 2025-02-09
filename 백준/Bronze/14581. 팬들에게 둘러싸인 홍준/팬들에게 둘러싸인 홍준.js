const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

console.log(':fan::fan::fan:');
console.log(`:fan::${input[0]}::fan:`);
console.log(':fan::fan::fan:');
