const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, h] = input[0].split(' ').map(Number);
const seq = input[1].split(' ').map(Number);
let cnt = 0;

for (let i = 0; i < n; i++) {
  if (h >= seq[i]) cnt++;
}
console.log(cnt);
