const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, l, r] = input[0].split(' ').map(Number);
const seq = input[1].split(' ').map(Number);
const newSeq = [
  ...seq.slice(0, l - 1),
  ...seq.slice(l - 1, r).sort((a, b) => a - b),
  ...seq.slice(r, n),
];
let ans = 0;

if (n === 1) {
  ans = 1;
}
for (let i = 1; i < n; i++) {
  if (newSeq[i] < newSeq[i - 1]) {
    ans = 0;
    break;
  } else {
    ans = 1;
  }
}
console.log(ans);
