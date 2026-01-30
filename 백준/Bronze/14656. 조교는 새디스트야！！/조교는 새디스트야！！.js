const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const students = input[1].split(' ').map(Number);
let cnt = 0;

for (let i = 0; i < n; i++) {
  if (students[i] !== i + 1) cnt++;
}
console.log(cnt);
