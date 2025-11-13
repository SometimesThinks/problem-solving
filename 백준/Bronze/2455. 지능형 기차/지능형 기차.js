const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let cnt = 0;
let res = 0;

for (let i = 0; i < 4; i++) {
  const [getOff, getOn] = input[i].split(' ').map(Number);

  cnt -= getOff;
  cnt += getOn;
  if (cnt > 10000) cnt = 10000;
  if (cnt > res) res = cnt;
}
console.log(res);
