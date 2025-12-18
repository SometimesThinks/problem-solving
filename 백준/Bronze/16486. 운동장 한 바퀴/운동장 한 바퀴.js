const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const PI = 3.141592;
const d1 = Number(input[0]);
const d2 = Number(input[1]);

console.log(2 * d1 + 2 * PI * d2);
