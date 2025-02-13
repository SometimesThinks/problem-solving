const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = [];

for (let i = 1; i < n + 1; i++) {
  seq.push(Number(input[i]));
}
console.log(seq.sort((a, b) => b - a).join('\n'));
