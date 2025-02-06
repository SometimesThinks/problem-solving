const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 0; i < n; i++) {
  const name = input[i + 1];

  console.log(...name.split(' ').map((e) => e.toLowerCase()));
}
