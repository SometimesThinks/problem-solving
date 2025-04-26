const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const cnt = input.slice(1).reduce((acc, cur) => {
  if (cur[0] === 'C') return acc + 1;
  else return acc;
}, 0);

console.log(cnt);
