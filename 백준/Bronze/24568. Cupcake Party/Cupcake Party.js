const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [r, s] = input.map(Number);

console.log(8 * r + 3 * s - 28);
