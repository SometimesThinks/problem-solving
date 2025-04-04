const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input.slice(1).map(BigInt);
const fre = {};

for (let i = 0; i < n; i++) fre[seq[i]] = (fre[seq[i]] || 0) + 1;
console.log(
  Object.entries(fre).sort((arr1, arr2) => {
    if (arr2[1] !== arr1[1]) return arr2[1] - arr1[1];
    else return BigInt(arr1[0]) > BigInt(arr2[0]) ? 1 : -1;
  })[0][0]
);
