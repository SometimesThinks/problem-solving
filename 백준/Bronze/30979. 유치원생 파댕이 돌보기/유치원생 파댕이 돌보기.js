const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const n = Number(input[1]);
const f = input[2].split(' ').map(Number);
let total = 0;

for (let i = 0; i < n; i++) {
  total += f[i];
}
if (total >= t) console.log('Padaeng_i Happy');
else console.log('Padaeng_i Cry');
