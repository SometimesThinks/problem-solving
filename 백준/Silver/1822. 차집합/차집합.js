const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [aN, bN] = input[0].split(' ').map(Number);
const a = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const b = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const check = {};
const ans = [];

for (let i = 0; i < bN; i++) check[b[i]] = 1;
for (let i = 0; i < aN; i++) if (!check[a[i]]) ans.push(a[i]);

if (ans.length) {
  console.log(ans.length);
  console.log(...ans);
} else console.log(0);
