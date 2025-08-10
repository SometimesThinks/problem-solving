const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const diff = [];
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
let d;

for (const pos of a) diff.push(Math.abs(pos - s));
d = diff[0];
for (const di of diff) d = gcd(d, di);
console.log(d);
