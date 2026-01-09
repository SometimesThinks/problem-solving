const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const seq = input[0].split(' ').map(Number);
const [b, c, d] = seq;
const burger = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const side = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const drink = input[3]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let origin = 0;
let dis = 0;

seq.sort((a, b) => b - a);
origin +=
  burger.reduce((acc, cur) => acc + cur) +
  side.reduce((acc, cur) => acc + cur) +
  drink.reduce((acc, cur) => acc + cur);
for (let i = 0; i < seq[0]; i++) {
  if (burger[i] && side[i] && drink[i])
    dis += (burger[i] + side[i] + drink[i]) * 0.9;
  else {
    if (burger[i]) dis += burger[i];
    if (side[i]) dis += side[i];
    if (drink[i]) dis += drink[i];
  }
}
console.log(origin);
console.log(dis);
