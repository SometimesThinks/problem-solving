const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const [n, m, k] = input[idx++].split(' ').map(Number);
  const houses = input[idx++].split(' ').map(Number);
  let money = houses.slice(0, m).reduce((acc, cur) => acc + cur, 0);
  let cnt = money < k ? 1 : 0;
  let l = 0;
  let r = m;

  while (m < n && l < n - 1) {
    r %= n;
    money -= houses[l++];
    money += houses[r++];
    if (money < k) {
      cnt++;
    }
  }
  console.log(cnt);
}
