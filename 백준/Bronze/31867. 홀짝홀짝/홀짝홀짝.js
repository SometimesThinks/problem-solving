const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const k = input[1];
let odd = (even = 0);

for (let i = 0; i < n; i++) {
  if (Number(k[i]) % 2) odd++;
  else even++;
}
console.log(odd > even ? 1 : even > odd ? 0 : -1);
