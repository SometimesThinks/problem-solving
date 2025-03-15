const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

console.log(
  input.map(Number).reduce((acc, cur) => {
    if (cur <= 40) return acc + 40;
    else return acc + cur;
  }, 0) / input.length
);
