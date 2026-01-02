const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const halli = new Map();
let res = 'NO';

for (let i = 1; i < n + 1; i++) {
  let [s, x] = input[i].split(' ');
  x = Number(x);
  halli.set(s, (halli.get(s) || 0) + x);
}
for (const val of halli.values()) {
  if (val === 5) {
    res = 'YES';
    break;
  }
}
console.log(res);
