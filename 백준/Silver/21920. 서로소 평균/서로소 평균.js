const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const x = Number(input[2]);
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
let aver = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
  if (gcd(x, seq[i]) === 1) {
    aver += seq[i];
    cnt += 1;
  }
}
console.log(aver / cnt);
