const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const target = 'MOBIS';
const check = {};
let res = 'YES';

for (const char of input[0]) check[char] = (check[char] || 0) + 1;
for (const char of target) {
  if (!check[char]) {
    res = 'NO';
    break;
  }
}
console.log(res);
