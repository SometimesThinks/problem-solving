const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  for (let j = 0; j < n; j++) {
    const [a, b] = input[idx++].split(' ').map(Number);
    console.log(a + b, a * b);
  }
}
