const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  const len = input[i].length;

  if (len >= 6 && len <= 9) console.log('yes');
  else console.log('no');
}
