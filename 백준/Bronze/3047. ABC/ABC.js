const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const seq = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const order = input[1].split('');
const charMap = new Map();
const res = [];

seq.forEach((val, idx) => charMap.set(String.fromCharCode(65 + idx), val));
order.forEach((val) => res.push(charMap.get(val)));
console.log(...res);
