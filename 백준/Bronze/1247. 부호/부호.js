const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;

for (let i = 0; i < 3; i++) {
  const n = Number(input[idx++]);
  let s = 0n;

  for (let i = 0; i < n; i++) {
    s += BigInt(input[idx++]);
  }
  if (s > 0) console.log('+');
  else if (s < 0) console.log('-');
  else console.log(0);
}
