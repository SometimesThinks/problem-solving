const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const v = Number(input[0]);
const votes = input[1];
let A = (B = 0);

for (let i = 0; i < v; i++) {
  if (votes[i] === 'A') A += 1;
  else B += 1;
}
if (A === B) console.log('Tie');
else console.log(A > B ? 'A' : 'B');
