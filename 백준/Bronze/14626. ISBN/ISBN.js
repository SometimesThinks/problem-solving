const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const isbn = input[0];
const weights = Array.from({ length: 12 }, (val, idx) =>
  (idx + 1) % 2 === 1 ? 1 : 3
);
let res = 0;

for (let i = 0; i < 10; i++) {
  let sum = 0;
  for (let j = 0; j < 12; j++) {
    const n = isbn[j] === '*' ? i : Number(isbn[j]);
    sum += n * weights[j];
  }
  sum = (sum + Number(isbn[12])) % 10;
  if (!sum) {
    res = i;
    break;
  }
}
console.log(res);
