const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const a = input[0];
const b = new Set(input[1].split(' '));
let res = '';

for (const char of a) {
  if (b.has(char)) res += char.toLowerCase();
  else res += char;
}
console.log(res);
