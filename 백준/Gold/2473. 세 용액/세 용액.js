const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let minAbs = Infinity;
let ans = '';

for (let i = 0; i < n - 2; i++) {
  let left = i + 1;
  let right = n - 1;
  let zero = false;
  while (left < right) {
    let sum = seq[i] + seq[left] + seq[right];
    if (Math.abs(sum) < minAbs) {
      minAbs = Math.abs(sum);
      ans = `${seq[i]} ${seq[left]} ${seq[right]}`;
    }
    if (sum < 0) left++;
    else if (sum > 0) right--;
    else {
      zero = true;
      break;
    }
  }
  if (zero) break;
}
console.log(ans);
