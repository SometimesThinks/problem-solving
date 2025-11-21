const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const bowls = input[0];
let high = 10;

for (let i = 1; i < bowls.length; i++) {
  if (bowls[i - 1] === bowls[i]) high += 5;
  else high += 10;
}
console.log(high);
