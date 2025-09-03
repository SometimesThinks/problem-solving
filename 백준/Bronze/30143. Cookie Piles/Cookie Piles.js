const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const res = [];

for (let i = 1; i < n + 1; i++) {
  const [n, a, d] = input[i].split(' ').map(Number);
  res.push(n * a + ((n * (n - 1)) / 2) * d);
}
console.log(res.join('\n'));
