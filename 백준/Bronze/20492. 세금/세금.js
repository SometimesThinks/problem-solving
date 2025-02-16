const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const prize = Number(input[0]);

console.log(prize * 0.78, prize - prize * 0.2 * 0.22);
