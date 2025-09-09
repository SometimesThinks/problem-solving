const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let res = [];

for (let i = 1; i < n + 1; i++) {
  const [t, l] = input[i].split(' ').map(Number);
  res.push(t + l);
}
console.log(res.sort((a, b) => a - b)[0]);
