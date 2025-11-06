const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const seq = input
  .map((el) => el.split(' ').map(Number))
  .sort((a, b) => a[0] < b[0]);
let idx1 = -1;
let idx2 = -1;
let flag = false;

for (let i = 0; i < 2; i++) {
  for (let j = i + 1; j < 3; j++) {
    if (seq[i][0] !== seq[j][0] && seq[i][1] !== seq[j][1]) {
      idx1 = i;
      idx2 = j;
      flag = true;
      break;
    }
  }
  if (flag) break;
}
console.log(
  seq[idx1][0] + seq[idx2][0] - seq[3 - idx1 - idx2][0],
  seq[idx1][1] + seq[idx2][1] - seq[3 - idx1 - idx2][1]
);
