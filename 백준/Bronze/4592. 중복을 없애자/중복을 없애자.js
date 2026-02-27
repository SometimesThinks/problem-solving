const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [n, ...seq] = input[i].split(' ').map(Number);
  const res = [seq[0]];

  for (let j = 1; j < n; j++) {
    if (seq[j] !== seq[j - 1]) res.push(seq[j]);
  }
  console.log(...res, '$');
}
