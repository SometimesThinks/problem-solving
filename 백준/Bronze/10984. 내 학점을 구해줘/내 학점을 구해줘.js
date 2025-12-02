const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  let total = 0;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    const [c, g] = input[idx++].split(' ').map(Number);
    total += c * g;
    cnt += c;
  }
  console.log(cnt, (total / cnt).toFixed(1));
}
