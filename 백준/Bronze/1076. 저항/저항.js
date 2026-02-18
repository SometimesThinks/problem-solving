const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const converter = new Map([
  ['black', '0'],
  ['brown', '1'],
  ['red', '2'],
  ['orange', '3'],
  ['yellow', '4'],
  ['green', '5'],
  ['blue', '6'],
  ['violet', '7'],
  ['grey', '8'],
  ['white', '9'],
]);

console.log(
  Number(converter.get(input[0]) + converter.get(input[1])) *
    10 ** Number(converter.get(input[2])),
);
