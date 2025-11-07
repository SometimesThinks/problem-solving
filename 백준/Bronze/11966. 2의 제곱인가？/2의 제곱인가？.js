const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const check = new Set();

for (let i = 0; i <= 30; i++) {
  check.add(2 ** i);
}
console.log(check.has(n) ? 1 : 0);
