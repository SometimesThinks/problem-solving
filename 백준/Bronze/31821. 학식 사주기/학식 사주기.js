const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const menu = {};
let idx = 1;
let res = 0;

while (idx < n + 1) menu[idx] = Number(input[idx++]);
while (++idx < input.length) res += Number(menu[input[idx]]);
console.log(res);
