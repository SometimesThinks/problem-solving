const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const a = [];
const b = [];
const c = [];
const d = [];
const ab = new Map();
let cnt = 0;

for (let i = 1; i < n + 1; i++) {
  const [ai, bi, ci, di] = input[i].split(' ').map(Number);
  a.push(ai);
  b.push(bi);
  c.push(ci);
  d.push(di);
}

for (let i = 0; i < n; i++) {
  const ai = a[i];
  for (let j = 0; j < n; j++) {
    const sum = ai + b[j];
    ab.set(sum, (ab.get(sum) || 0) + 1);
  }
}
for (let i = 0; i < n; i++) {
  const ci = c[i];
  for (let j = 0; j < n; j++) {
    const tar = -(ci + d[j]);
    const con = ab.get(tar);
    if (con) cnt += con;
  }
}
console.log(cnt);
