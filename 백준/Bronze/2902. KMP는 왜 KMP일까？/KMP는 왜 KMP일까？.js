const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const long = input[0];
let short = '';

for (let i = 0; i < long.length; i++) {
  if (i === 0) {
    short += long[i];
  } else if (long[i - 1] === '-') {
    short += long[i];
  }
}
console.log(short);
