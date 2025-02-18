const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const check = Array.from({ length: n }, () => 0);

for (let i = 0; i < n; i++) {
  let str = 0;
  let end = n - 1;
  if (str === i) str++;
  if (end === i) end--;
  while (str < end) {
    let sum = seq[str] + seq[end];
    if (sum === seq[i]) {
      check[i] = 1;
      break;
    } else if (sum < seq[i]) {
      str++;
    } else end--;
    if (str === i) str++;
    if (end === i) end--;
  }
}
console.log(check.reduce((acc, cur) => (acc += cur), 0));
