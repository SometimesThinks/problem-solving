const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const seq = input[1].split(' ');
const check = {};
let left = 0;
let right = 0;
let longest = 0;

while (right < n && right >= left) {
  if (check[seq[right]] === undefined || check[seq[right]] < k) {
    check[seq[right]] = (check[seq[right]] || 0) + 1;
    right += 1;
  } else {
    longest = longest > right - left ? longest : right - left;
    check[seq[left]] -= 1;
    left += 1;
  }
}
longest = longest > right - left ? longest : right - left;
console.log(longest);
