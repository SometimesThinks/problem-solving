const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const pn = input[1].split(' ').map(Number);
let temp = 0;
let res = 0;

for (let i = 1; i < n; i++) {
  if (pn[i] - pn[i - 1] > 0) temp += pn[i] - pn[i - 1];
  else temp = 0;
  if (temp > res) res = temp;
}
console.log(res);
