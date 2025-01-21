const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n: 수열의 길이, q: 질문의 수
const [n, q] = input[0].split(' ').map(Number);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const accSeq = { 0: seq[0] };
const results = [];

for (let i = 1; i < n; i++) {
  accSeq[i] = accSeq[i - 1] + seq[i];
}
for (let i = 0; i < q; i++) {
  const [l, r] = input[i + 2].split(' ').map(Number);
  results.push(l > 1 ? accSeq[r - 1] - accSeq[l - 2] : accSeq[r - 1]);
}
console.log(results.join('\n'));
