const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const res = [];
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

for (let t = 1; t < n + 1; t++) {
  const num = input[t].split(' ').map(Number);
  const candi = [];

  for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      candi.push(gcd(num[i], num[j]));
    }
  }
  candi.sort((a, b) => b - a);
  res.push(candi[0]);
}
console.log(res.join('\n'));
