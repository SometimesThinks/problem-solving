const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const check = Array.from({ length: n + 1 }, () => 0);
let cnt = 0;
let ans = 0;

for (let i = 2; i < n + 1; i++) {
  let flag = false;
  if (!check[i]) {
    let mutiple = 1;
    while (true) {
      const temp = i * mutiple;
      if (temp > n) break;
      if (check[temp]) {
        mutiple++;
      } else {
        check[temp] = 1;
        ans = temp;
        mutiple++;
        cnt++;
        if (cnt === k) {
          flag = true;
          break;
        }
      }
    }
  }
  if (flag) break;
}
console.log(ans);
