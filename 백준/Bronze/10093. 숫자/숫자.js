const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [str, end] = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const numbers = [];

for (let i = str + 1; i < end; i++) {
  numbers.push(i);
}
console.log(numbers.length);
console.log(...numbers);
