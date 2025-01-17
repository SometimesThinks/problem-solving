const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const seq = input[0].split(' ').map(Number);
const tar = Number(input[1]);
const pairs = [];
let sum = 0;
let right = seq.length - 1;

seq.sort((a, b) => a - b);
for (let left = 0; left < seq.length; left++) {
  sum = seq[left] + seq[right];
  while (right > left + 1 && sum > tar) {
    right -= 1;
    sum = seq[left] + seq[right];
  }
  if (right <= left) {
    break;
  }
  if (sum === tar) {
    pairs.push([seq[left], seq[right]]);
    right -= 1;
  }
}
pairs.map((pair) => {
  console.log(...pair);
});
console.log(pairs.length);
