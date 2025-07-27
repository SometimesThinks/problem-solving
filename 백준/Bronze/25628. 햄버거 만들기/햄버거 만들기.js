const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let cnt = 0;

while (a >= 2 && b >= 1) {
  a -= 2;
  b -= 1;
  cnt += 1;
}
console.log(cnt);
