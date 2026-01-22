const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const levels = input.slice(1).map(Number);
let idx = 0;
let cnt = 0;

while (idx >= 0 && idx < n) {
  if (levels[idx] >= levels[idx + 1]) {
    while (levels[idx] >= levels[idx + 1]) {
      levels[idx]--;
      cnt++;
    }
    if (idx >= 1 && levels[idx - 1] >= levels[idx]) {
      idx--;
    } else {
      idx++;
    }
  } else {
    idx++;
  }
}
console.log(cnt);
