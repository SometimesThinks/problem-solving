const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const checkGp = {};

for (let i = 1; i < n + 1; i++) {
  checkGp[[...input[i]].sort()] = (checkGp[[...input[i]].sort()] || 0) + 1;
}
console.log(Object.keys(checkGp).length);
