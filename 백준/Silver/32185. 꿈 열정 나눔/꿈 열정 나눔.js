const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const seq = input.slice(1).map((str) => str.split(' ').map(Number));
const abilIdx = seq.map((arr, idx) => {
  return [
    arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0),
    idx,
  ];
});
const applies = abilIdx.slice(1).sort((arr1, arr2) => arr2[0] - arr1[0]);
const teams = [0];

for (let i = 0; i < n; i++) {
  if (teams.length === m) {
    break;
  }
  if (applies[i][0] <= abilIdx[0][0]) {
    teams.push(applies[i][1]);
  }
}
console.log(...teams);
