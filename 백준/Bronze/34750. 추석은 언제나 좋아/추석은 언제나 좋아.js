const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const res = Array.from({ length: 2 }, () => 0);

if (n >= 1000000) {
  res[0] = n * 0.2;
} else if (n >= 500000) {
  res[0] = n * 0.15;
} else if (n >= 100000) {
  res[0] = n * 0.1;
} else {
  res[0] = n * 0.05;
}
res[1] = n - res[0];
console.log(...res);
