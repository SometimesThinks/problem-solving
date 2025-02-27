const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const re = input[0];
const n = Number(input[1]);
const reCheck = re.slice(0, 5);
let cnt = 0;

for (let i = 2; i < n + 2; i++) {
  if (reCheck === input[i].slice(0, 5)) cnt++;
}
console.log(cnt);
