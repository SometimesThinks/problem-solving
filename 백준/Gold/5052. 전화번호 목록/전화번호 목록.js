const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  const numbers = input.slice(idx, idx + n).sort((a, b) => {
    if (a.length !== b.length) return b.length - a.length;
    else return a.localeCompare(b);
  });
  idx += n;
  const root = new Map();
  let res = true;

  for (const number of numbers) {
    let pre = root;
    let newFlag = false;
    for (const c of number) {
      if (!pre.has(c)) {
        pre.set(c, new Map());
        newFlag = true;
      }
      pre = pre.get(c);
    }
    if (!newFlag) res = false;
  }
  console.log(res ? 'YES' : 'NO');
}
