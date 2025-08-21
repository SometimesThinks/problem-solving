const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const bill = { 136: 1000, 142: 5000, 148: 10000, 154: 50000 };
let res = 0;

for (let i = 1; i < n + 1; i++) {
  const [width, length] = input[i].split(' ').map(Number);
  res += bill[width];
}
console.log(res);
