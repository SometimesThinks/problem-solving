const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

if (n === 1) {
  console.log(4);
} else if (n === 2 || n === 3) {
  console.log(6);
} else if (n % 2 === 0) console.log(n);
else console.log(n + 1);
