const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [sum, diff] = input[0].split(' ').map(Number);
const x = (sum + diff) / 2;
const y = sum - x;

if (x - Math.floor(x) > 0 || x < 0 || y < 0) console.log(-1);
else console.log(x, y);
