const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

while (idx < input.length) {
  s = Number(input[idx++]);
  n = Number(input[idx++]);
  for (let i = 0; i < n; i++) {
    const [q, p] = input[idx + i].split(' ').map(Number);
    s += q * p;
  }
  idx += n;
  console.log(s);
}
