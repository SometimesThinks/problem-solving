const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let idx = 1;

for (let i = 0; i < n; i++) {
  const p = Number(input[idx++]);
  const list = [];

  for (let i = 0; i < p; i++) {
    list.push(input[idx++].split(' '));
  }
  list.sort((a, b) => Number(b[0]) - Number(a[0]));
  console.log(list[0][1]);
}
