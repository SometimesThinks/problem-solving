const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const s = input[0];
const converter = {
  a: '4',
  e: '3',
  i: '1',
  o: '0',
  s: '5',
};
let res = '';

for (const char of s) {
  if (!converter[char]) res += char;
  else res += converter[char];
}
console.log(res);
