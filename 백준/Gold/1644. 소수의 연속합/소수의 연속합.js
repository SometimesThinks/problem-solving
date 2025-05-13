const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const check = Array.from({ length: n + 1 }, () => true);
// 에스토스테네스의 체
check[0] = check[1] = false;
for (let i = 2; i < n + 1; i++) {
  if (check) {
    for (let j = i + i; j < n + 1; j += i) {
      check[j] = false;
    }
  }
}
// 소수만 남은 배열
const primes = check
  .map((val, idx) => {
    if (val) return idx;
    else 0;
  })
  .filter((val) => val > 0);
let left = 0;
let right = 0;
let sum = 0;
let cnt = 0;

while (left <= right && right <= primes.length) {
  if (sum === n) cnt++;
  if (sum >= n) sum -= primes[left++];
  else if (sum < n) sum += primes[right++];
}
console.log(cnt);
