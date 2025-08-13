const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  const [p, t] = input[i].split(' ').map(Number);
  console.log(p - Math.floor(t / 7) + Math.floor(t / 4));
}
