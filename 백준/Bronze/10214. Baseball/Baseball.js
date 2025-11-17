const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;
const res = [];

for (let i = 1; i < t + 1; i++) {
  let yonsei = 0;
  let korea = 0;
  while (idx < i * 9 + 1) {
    const [y, k] = input[idx++].split(' ').map(Number);
    yonsei += y;
    korea += k;
  }
  if (yonsei > korea) res.push('Yonsei');
  else if (korea > yonsei) res.push('Korea');
  else res.push('Draw');
}
console.log(res.join('\n'));
