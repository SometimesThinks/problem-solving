const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nations = input.slice(1).map((arr) => arr.split(' ').map(Number));
const rankings = [];
let rank = 1;

nations.sort((arr1, arr2) => {
  if (arr1[1] === arr2[1]) {
    return arr2[2] === arr1[2] ? arr2[3] - arr1[3] : arr2[2] - arr1[2];
  }
  return arr2[1] - arr1[1];
});
for (let i = 0; i < n; i++) {
  rankings.push([nations[i][0], 0]);
}
for (let i = 1; i < n; i++) {
  const [num1, g1, s1, b1] = nations[i - 1];
  const [num2, g2, s2, b2] = nations[i];

  if (g1 > g2 || s1 > s2 || b1 > b2) {
    rank += 1;
  }
  rankings[i][1] = rank;
}
console.log(rankings.filter((ranking) => ranking[0] === k)[0][1]);
