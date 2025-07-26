const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const str = input[0];
let sum = 0;

if (str.length === 3) {
  const nums = str.split('10');

  for (const num of nums) {
    if (num === '') sum += 10;
    else sum += Number(num);
  }
} else if (str.length === 4) {
  sum = 20;
} else {
  sum = str
    .split('')
    .map(Number)
    .reduce((acc, cur) => (acc += cur), 0);
}
console.log(sum);
