const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [s, m, l] = input.map(Number);

console.log(s + 2 * m + 3 * l >= 10 ? 'happy' : 'sad');
