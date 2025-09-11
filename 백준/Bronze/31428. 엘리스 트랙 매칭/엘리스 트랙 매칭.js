const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ');
const choice = input[2];
const fre = { C: 0, S: 0, I: 0, A: 0 };

for (let i = 0; i < n; i++) {
  fre[seq[i]] += 1;
}
console.log(fre[choice]);
