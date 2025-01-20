const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let [p, n] = input[0].split(' ').map(Number);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let ans = 0;

for (let i = 0; i < n; i++) {
  if (p >= 200) {
    break;
  }
  p += seq[i];
  ans += 1;
}
console.log(ans);
