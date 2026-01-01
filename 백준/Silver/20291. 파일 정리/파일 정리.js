const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const fre = new Map();

for (let i = 1; i < n + 1; i++) {
  const [name, extension] = input[i].split('.');
  fre.set(extension, (fre.get(extension) || 0) + 1);
}
[...fre].sort().map((val) => console.log(...val));
