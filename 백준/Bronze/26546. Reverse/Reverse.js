const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let k = 1; k < n + 1; k++) {
  let [str, i, j] = input[k].split(' ');
  [i, j] = [i, j].map(Number);
  let newStr = '';

  for (let l = 0; l < str.length; l++) {
    if (l < i || l >= j) newStr += str[l];
  }
  console.log(newStr);
}
