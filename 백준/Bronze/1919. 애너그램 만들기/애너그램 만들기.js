const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const check1 = Array.from({ length: 26 }, () => 0);
const check2 = Array.from({ length: 26 }, () => 0);
let min = 0;

for (let i = 0; i < input[0].length; i++) {
  check1[input[0][i].charCodeAt() - 97] += 1;
}
for (let i = 0; i < input[1].length; i++) {
  check2[input[1][i].charCodeAt() - 97] += 1;
}
for (let i = 0; i < 26; i++) {
  min += Math.abs(check1[i] - check2[i]);
}
console.log(min);
