const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const levels = input[0].split(' ').map(Number);

console.log(Math.abs(levels[0] + levels[3] - levels[1] - levels[2]));
