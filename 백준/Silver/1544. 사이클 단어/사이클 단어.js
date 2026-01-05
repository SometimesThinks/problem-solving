const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const types = new Set();

for (let i = 1; i < n + 1; i++) {
  let voca = input[i];
  let represent = '';
  for (let j = 0; j < voca.length; j++) {
    let temp = '';
    for (let k = 0; k < voca.length; k++) {
      const idx = (j + k) % voca.length;
      temp += voca[idx];
    }
    if (!represent.length) represent = voca;
    if (temp < represent) represent = temp;
  }
  types.add(represent);
}
console.log(types.size);
