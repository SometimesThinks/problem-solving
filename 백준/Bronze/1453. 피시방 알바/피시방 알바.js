const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const seq = input[1].split(' ').map(Number);
const pc = new Map();
let cnt = 0;

for (const c of seq) {
  if (!pc.get(c)) {
    pc.set(c, true);
  } else {
    cnt++;
  }
}
console.log(cnt);
