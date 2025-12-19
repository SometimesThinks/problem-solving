const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
let cnt = 0;

for (let i = 0; i < n; i++) {
  if (b[i] >= a[i]) cnt += 1;
}
console.log(cnt);
