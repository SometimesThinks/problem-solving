const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const aPrize = {
  1: 5000000,
  2: 3000000,
  3: 2000000,
  4: 500000,
  5: 300000,
  6: 100000,
};
const bPrize = {
  1: 5120000,
  2: 2560000,
  3: 1280000,
  4: 640000,
  5: 320000,
};
const aRank = [];
const bRank = [];
const res = [];

for (let i = 1; i < 7; i++) {
  for (let j = 0; j < i; j++) {
    aRank.push(i);
  }
}
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2 ** i; j++) {
    bRank.push(i + 1);
  }
}
for (let i = 1; i < t + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  let ans = 0;

  if (a > 0 && a <= 21) ans += aPrize[aRank[a - 1]];
  if (b > 0 && b <= 31) ans += bPrize[bRank[b - 1]];
  res.push(ans);
}
console.log(res.join('\n'));
