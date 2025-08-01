const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

for (let i = 1; i < n + 1; i++) {
  const [a, b] = input[i]
    .split(' ')
    .filter((e) => e != '')
    .map(Number);

  console.log((a * b) / gcd(a, b));
}
