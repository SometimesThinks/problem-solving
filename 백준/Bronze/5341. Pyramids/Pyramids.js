const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);

for (const n of input.slice(0, input.length - 1))
  console.log((n * (n + 1)) / 2);
