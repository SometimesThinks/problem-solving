const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const b = [];
const locations = new Map();
const res = [];
let idx = 1;

for (let i = 0; i < n; i++) {
  b.push(Number(input[idx++]));
}
b.sort((a, b) => a - b);
// 원소 값, 위치를 key, value로 기록
for (let i = 0; i < n; i++) {
  if (!locations.has(b[i])) {
    locations.set(b[i], i);
  }
}
for (let i = 0; i < m; i++) {
  const location = locations.get(Number(input[idx++]));
  res.push(location === undefined ? -1 : location);
}
console.log(res.join('\n'));
