const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 0; i < t; i++) {
  // n: a의 크기, m: b의 크기
  const [n, m] = input[3 * i + 1].split(' ').map(Number);
  const a = input[3 * i + 2]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const b = input[3 * i + 3]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let cnt = 0;

  for (let aIdx = n - 1; aIdx >= 0; aIdx--) {
    for (let bIdx = m - 1; bIdx >= 0; bIdx--) {
      if (a[aIdx] > b[bIdx]) {
        cnt += bIdx + 1;
        break;
      }
    }
  }
  console.log(cnt);
}
