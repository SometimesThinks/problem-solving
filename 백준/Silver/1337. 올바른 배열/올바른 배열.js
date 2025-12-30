const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
let res = 4;
let l = 0;
let r = 1;

while (r < n) {
  r = l + 1;
  let now = arr[l];
  let nxt = arr[r];
  let con = 1;
  let add = 0;
  while (con < 5) {
    if (nxt - now === 1) {
      now += 1;
      con += 1;
      r += 1;
      nxt = arr[r];
    } else {
      now += 1;
      add += 1;
      con += 1;
    }
  }
  l++;
  if (add < res) res = add;
  if (!res) break;
}
console.log(res);
