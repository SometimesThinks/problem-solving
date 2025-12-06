const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let res = 0;

for (let i = 1; i < n + 1; i++) {
  const proAndCons = input[i];
  let pro = (con = 0);

  for (const char of proAndCons) {
    if (char === 'O') pro += 1;
    else con += 1;
  }
  if (pro > con) res += 1;
}
console.log(res);
