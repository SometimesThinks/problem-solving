const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  let n = Number(input[i]);
  let bin = '';
  const res = [];

  while (n > 0) {
    bin = String(n % 2) + bin;
    n = Math.floor(n / 2);
  }
  for (let i = bin.length - 1; i >= 0; i--) {
    if (bin[i] === '1') res.push(bin.length - 1 - i);
  }
  console.log(...res);
}
