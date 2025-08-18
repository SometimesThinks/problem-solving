const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const string = input[0];
let a = (b = 0);

for (const char of string) {
  if (char === 'A') a += 1;
  else b += 1;
}
console.log(`${a} : ${b}`);
