const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const s = input[1];
const sortedS = s.split('').sort();
const skip = {};
let res = '';

for (let i = 0; i < m; i++) {
  skip[sortedS[i]] = (skip[sortedS[i]] || 0) + 1;
}
for (let i = 0; i < n; i++) {
  if (skip[s[i]]) skip[s[i]]--;
  else res += s[i];
}
console.log(res);
