const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const seq = input.map(Number).sort((a, b) => a - b);

console.log(seq[0] + seq[1] === seq[2] ? 1 : 0);
