const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const inven = input[0].split(' ').map(Number);
const reque = input[1].split(' ').map(Number);
let res = 0;

for (let i = 0; i < 3; i++) {
  if (reque[i] - inven[i] > 0) res += reque[i] - inven[i];
}
console.log(res);
