const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let ans = 0;

for (let i = 1; i < n + 1; i++) {
  const [q, y] = input[i].split(' ').map(Number);
  ans += q * y;
}
console.log(ans);
