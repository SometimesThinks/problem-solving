const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);
const e = a * d + c * b;
const f = b * d;
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

console.log(e / gcd(e, f), f / gcd(e, f));
