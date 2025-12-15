const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const s = input[1];
const fre = {};

for (let i = 0; i < n; i++) {
  if (s[i] !== ' ' && s[i] !== ',' && s[i] !== '.')
    fre[s[i]] = (fre[s[i]] || 0) + 1;
}
console.log(Object.entries(fre).sort((a, b) => b[1] - a[1])[0][1]);
