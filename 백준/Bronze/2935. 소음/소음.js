const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const a = BigInt(input[0]);
const o = input[1];
const b = BigInt(input[2]);

console.log(o === '+' ? String(a + b) : String(a * b));
