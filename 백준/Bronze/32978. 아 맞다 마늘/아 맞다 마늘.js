const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const needs = input[1].split(' ');
const used = input[2].split(' ');
const check = {};

for (const u of used) {
  check[u] = true;
}
for (const n of needs) {
  if (!check[n]) console.log(n);
}
