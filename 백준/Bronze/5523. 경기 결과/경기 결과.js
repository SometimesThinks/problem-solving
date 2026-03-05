const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let a = (b = 0);

for (let i = 1; i < n + 1; i++) {
  const [ai, bi] = input[i].split(' ').map(Number);
  if (ai > bi) a++;
  else if (bi > ai) b++;
}
console.log(a, b);
