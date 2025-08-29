const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, h, v] = input[0].split(' ').map(Number);

console.log(
  [v * h, (n - v) * h, v * (n - h), (n - v) * (n - h)].sort(
    (a, b) => b - a
  )[0] * 4
);
