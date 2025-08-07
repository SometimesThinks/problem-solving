const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const r = input[1].split(' ').map(Number);
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const res = [];

for (let i = 1; i < n; i++) {
  const numt = r[i];
  const dent = r[0];
  const g = gcd(numt, dent);

  res.push(`${dent / g}/${numt / g}`);
}
console.log(res.join('\n'));
