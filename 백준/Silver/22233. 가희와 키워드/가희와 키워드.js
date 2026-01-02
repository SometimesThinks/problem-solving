const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const memo = new Map();
const res = [];
let idx = 1;

for (let i = 0; i < n; i++) {
  memo.set(input[idx++], true);
}
for (let i = 0; i < m; i++) {
  const keywords = input[idx++].split(',');
  for (const keyword of keywords) {
    if (memo.has(keyword)) memo.delete(keyword);
  }
  res.push(memo.size);
}
console.log(res.join('\n'));
