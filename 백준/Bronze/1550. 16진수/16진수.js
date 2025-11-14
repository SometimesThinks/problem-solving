const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const hexNum = input[0];
const hex = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};
let decNum = 0;

for (let i = hexNum.length - 1; i >= 0; i--) {
  const digit = hexNum[i];
  if (hex[digit]) decNum += hex[digit] * 16 ** (hexNum.length - 1 - i);
  else decNum += Number(digit) * 16 ** (hexNum.length - 1 - i);
}
console.log(decNum);
