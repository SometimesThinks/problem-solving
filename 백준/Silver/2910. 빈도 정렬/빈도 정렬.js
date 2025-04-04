const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, c] = input[0].split(' ').map(Number);
const seq = input[1].split(' ').map(Number);
const fre = {};
let kind = 0;

for (let i = 0; i < n; i++) {
  if (!fre[seq[i]]) {
    fre[seq[i]] = Array.from({ length: 2 }, () => 0);
    fre[seq[i]][1] = kind;
    kind++;
  }
  fre[seq[i]][0]++;
}
seq.sort((a, b) => {
  if (fre[a][0] !== fre[b][0]) return fre[b][0] - fre[a][0];
  else return fre[a][1] - fre[b][1];
});
console.log(...seq);
