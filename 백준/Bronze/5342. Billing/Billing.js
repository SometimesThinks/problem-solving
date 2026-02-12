const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const list = input.slice(0, input.length - 1);
const prices = new Map([
  ['Paper', 57.99],
  ['Printer', 120.5],
  ['Planners', 31.25],
  ['Binders', 22.5],
  ['Calendar', 10.95],
  ['Notebooks', 11.2],
  ['Ink', 66.95],
]);
let total = 0;

for (const stuff of list) total += prices.get(stuff);
console.log(`$${total}`);
