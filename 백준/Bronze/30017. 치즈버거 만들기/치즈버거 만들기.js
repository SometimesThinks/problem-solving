const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);

for (let i = 1; i < b + 1; i++) {
  if (a >= i + 1) ans = 2 * i + 1;
  else break;
}
console.log(ans);
