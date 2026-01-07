const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const res = [];
let temp = n;

while (temp % 2 === 0) {
  temp /= 2;
  res.push(2);
}
for (let i = 3; i * i <= n; i += 2) {
  while (temp % i === 0) {
    temp /= i;
    res.push(i);
  }
}
if (temp > 1) res.push(temp);
console.log(res.join('\n'));
