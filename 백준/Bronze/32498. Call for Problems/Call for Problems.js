const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);

const n = Number(input[0]);
let cnt = 0;

for (let i = 1; i < n + 1; i++) {
  if (input[i] % 2 === 1) cnt++;
}
console.log(cnt);
