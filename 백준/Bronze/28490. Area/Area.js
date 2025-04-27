const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let max = 0;

for (let i = 1; i < n + 1; i++) {
  const [h, w] = input[i].split(' ').map(Number);
  if (h * w > max) max = h * w;
}
console.log(max);
