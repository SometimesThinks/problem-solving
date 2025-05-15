const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const res = [];

for (let i = 1; i < t + 1; i++) {
  const n = Number(input[2 * i - 1]);
  const seq = input[2 * i].split(' ').map(Number);
  const acc = Array.from({ length: n });
  let max = -Infinity;
  // 누적 합 배열 초기화
  acc[0] = seq[0];
  for (let i = 1; i < n; i++) acc[i] = acc[i - 1] + seq[i];
  // 단일 값 중 최댓값
  for (let i = 0; i < n; i++) {
    if (seq[i] > max) max = seq[i];
  }
  // 누적 합 배열 중 최댓값
  for (let i = 1; i < n; i++) {
    if (acc[i] > max) max = acc[i];
  }
  // 서브 배열 합 중 최댓값
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      let sub = acc[i] - acc[j];
      if (sub > max) max = sub;
    }
  }
  res.push(max);
}
console.log(res.join('\n'));
