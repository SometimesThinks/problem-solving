const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(':').map(Number);
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const g = gcd(n, m);

console.log(`${n / g}:${m / g}`);
