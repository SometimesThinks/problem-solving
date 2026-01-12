const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const stores = input[1].split(' ').map(Number);
let next = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
  if (next === stores[i]) {
    cnt++;
    next += 1;
  }
  if (next === 3) next = 0;
}
console.log(cnt);
