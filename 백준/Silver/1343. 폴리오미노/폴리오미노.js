const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const board = input[0];
let leng = 0;
let res = '';

for (const char of board) {
  if (char === '.') {
    if (leng >= 4) {
      res += 'AAAA'.repeat(Math.floor(leng / 4));
      leng = leng % 4;
    }
    if (leng >= 2) {
      res += 'BB'.repeat(Math.floor(leng / 2));
      leng = leng % 2;
    }
    res += '.';
    leng = 0;
  } else leng += 1;
}
if (leng >= 4) {
  res += 'AAAA'.repeat(Math.floor(leng / 4));
  leng = leng % 4;
}
if (leng >= 2) {
  res += 'BB'.repeat(Math.floor(leng / 2));
  leng = leng % 2;
}
console.log(res.length === board.length ? res : -1);
