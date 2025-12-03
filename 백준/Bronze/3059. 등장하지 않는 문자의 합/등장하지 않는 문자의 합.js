const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  const s = input[i];
  const check = {};
  let res = 0;

  for (const char of s) check[char] = true;
  for (const char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    if (!check[char]) {
      res += char.charCodeAt(0);
    }
  }
  console.log(res);
}
