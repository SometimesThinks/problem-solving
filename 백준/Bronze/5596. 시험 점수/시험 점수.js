const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const s = input[0]
  .split(' ')
  .map(Number)
  .reduce((acc, cur) => (acc += cur), 0);
const t = input[1]
  .split(' ')
  .map(Number)
  .reduce((acc, cur) => (acc += cur), 0);

if (s >= t) {
  console.log(s);
} else {
  console.log(t);
}
