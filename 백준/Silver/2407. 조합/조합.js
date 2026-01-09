const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(BigInt);
const factorial = (num) => {
  if (num <= 1n) return 1n;
  return num * factorial(num - 1n);
};
let res = 1n;

for (let i = n; i > n - m; i -= 1n) {
  res *= i;
}
console.log(String(res / factorial(m)));
