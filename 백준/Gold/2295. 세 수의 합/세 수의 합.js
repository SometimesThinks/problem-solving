const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
const seqSet = new Set(seq);
let maxSum = 0;

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    for (let k = j; k < n; k++) {
      const sum = seq[i] + seq[j] + seq[k];
      if (sum > seq[n - 1]) break;
      if (seqSet.has(sum) && sum > maxSum) maxSum = sum;
    }
  }
}
console.log(maxSum);
