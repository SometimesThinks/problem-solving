const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const voca = input[0].split('');

console.log(
  voca.filter((e) => ['a', 'e', 'i', 'o', 'u'].includes(e)).length,
  voca.filter((e) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(e)).length,
);
