const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const seq = input[0].split(' ').map(Number);

console.log(seq.reduce((acc, cur) => (acc += cur), 0));
