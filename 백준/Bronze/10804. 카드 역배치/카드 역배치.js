const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let cards = Array.from({ length: 21 }, (val, idx) => idx);

for (const range of input) {
  const [str, end] = range.split(' ').map(Number);
  cards = [
    cards[0],
    ...cards.slice(1, str),
    ...cards.slice(str, end + 1).reverse(),
    ...cards.slice(end + 1, 21),
  ];
}
console.log(...cards.slice(1));
