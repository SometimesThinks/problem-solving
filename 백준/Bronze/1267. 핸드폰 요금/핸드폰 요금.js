const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const calls = input[1].split(' ').map(Number);
let Y = 0;
let M = 0;

for (const call of calls) {
  Y += Math.ceil(call / 30 + 0.1) * 10;
  M += Math.ceil(call / 60 + 0.1) * 15;
}
if (Y > M) {
  console.log('M', M);
} else if (Y < M) {
  console.log('Y', Y);
} else {
  console.log('Y', 'M', Y);
}
