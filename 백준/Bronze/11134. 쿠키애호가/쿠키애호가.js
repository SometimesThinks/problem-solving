const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const res = [];

for (let i = 1; i < t + 1; i++) {
  const [n, c] = input[i].split(' ').map(Number);
  res.push(Math.ceil(n / c));
}
console.log(res.join('\n'));
