const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
let cnt = 0;
let res = 0;

for (let i = 0; i < n; i++) {
  if (seq[i]) {
    res += cnt + 1;
    cnt += 1;
  } else {
    cnt = 0;
  }
}
console.log(res);
