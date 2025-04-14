const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [r, g, b] = input.map(Number);

console.log(3 * r + 4 * g + 5 * b);
