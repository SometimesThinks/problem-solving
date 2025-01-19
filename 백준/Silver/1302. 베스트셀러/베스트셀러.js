const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const books = input.slice(1);
const fre = {};
let bests = [];
let best = 0;

for (const book of books) {
  fre[book] = (fre[book] || 0) + 1;
}
for (const book in fre) {
  if (fre[book] > best) {
    best = fre[book];
    bests = [book];
  } else if (fre[book] === best) {
    bests.push(book);
  }
}
console.log(bests.sort()[0]);
