const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let cnt = 0;
const candis = [];

for (let i = 0; i < 10; i++) {
  const [getOff, getOn] = input[i].split(' ').map(Number);
  cnt -= getOff;
  cnt += getOn;
  candis.push(cnt);
}
const res = candis.sort((a, b) => b - a)[0];
console.log(res > 10000 ? 10000 : res);
