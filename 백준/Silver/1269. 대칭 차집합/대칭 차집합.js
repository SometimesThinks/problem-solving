const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
const aSet = new Set(a);
const bSet = new Set(b);

for (let i = 0; i < m; i++) {
  if (aSet.has(b[i])) aSet.delete(b[i]);
}
for (let i = 0; i < n; i++) {
  if (bSet.has(a[i])) bSet.delete(a[i]);
}
console.log(aSet.size + bSet.size);
