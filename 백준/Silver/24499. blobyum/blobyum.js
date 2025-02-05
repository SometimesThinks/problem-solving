const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const applePies = input[1].split(' ').map(Number);
let maxPies = 0;
let accPies = 0;
// 첫 k개의 애플파이 합
for (let i = 0; i < k; i++) {
  accPies += applePies[i];
}
for (let i = 0; i < n; i++) {
  let lastPie = i + k;
  if (i + k >= n) {
    lastPie -= n;
  }
  accPies = accPies - applePies[i] + applePies[lastPie];
  if (accPies > maxPies) {
    maxPies = accPies;
  }
}
console.log(maxPies);
