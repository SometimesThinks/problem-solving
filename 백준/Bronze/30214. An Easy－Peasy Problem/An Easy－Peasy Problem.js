const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [s1, s2] = input[0].split(' ').map(Number);

console.log(s1 >= Math.ceil(s2 / 2) ? 'E' : 'H');
