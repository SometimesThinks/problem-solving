const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const x = Number(input[0]);
let dis = 0;

for (let i = 1; i < x + 1; i++) {
  if (i % 2 === 1) dis += 3;
  else dis -= 2;
}
console.log(dis);
