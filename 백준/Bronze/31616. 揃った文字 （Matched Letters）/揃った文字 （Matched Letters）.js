const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const s = input[1];
let res = 'Yes';

for (let i = 0; i < n - 1; i++) {
  if (s[i] !== s[i + 1]) res = 'No';
}
console.log(res);
