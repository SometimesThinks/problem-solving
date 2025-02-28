const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

console.log(
  input.slice(1).reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0)
);
