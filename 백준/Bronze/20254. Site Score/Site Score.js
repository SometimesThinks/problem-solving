const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [ur, tr, uo, to] = input[0].split(' ').map(Number);

console.log(56 * ur + 24 * tr + 14 * uo + 6 * to);
