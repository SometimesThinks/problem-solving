const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const s = input[1];
const t = input[2];
let res = 0;

for (let i = 0; i < n; i++) {
  if (s[i] !== t[i]) res += 1;
}
console.log(res);
