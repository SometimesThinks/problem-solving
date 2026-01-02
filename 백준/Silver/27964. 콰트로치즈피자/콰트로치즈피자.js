const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const toppings = input[1].split(' ');
const kind = new Set();

for (const topping of toppings) {
  if (topping.slice(topping.length - 6, topping.length) === 'Cheese')
    kind.add(topping);
}
console.log(kind.size >= 4 ? 'yummy' : 'sad');
