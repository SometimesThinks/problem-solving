const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const seqIdx = []; // [val, idx]가 요소인 2차원 배열
const ans = Array.from({ length: n }, () => 0);
let cnt = 0;

seq.forEach((val, idx) => seqIdx.push([val, idx]));
seqIdx.sort((arr1, arr2) => arr1[0] - arr2[0]);
ans[seqIdx[0][1]] = 0;
for (let i = 1; i < n; i++) {
  if (seqIdx[i][0] !== seqIdx[i - 1][0]) {
    cnt += 1;
  }
  ans[seqIdx[i][1]] = cnt;
}
console.log(...ans);
