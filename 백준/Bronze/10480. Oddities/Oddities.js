const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  const num = Number(input[i]);
  console.log(num % 2 === 0 ? `${num} is even` : `${num} is odd`);
}
