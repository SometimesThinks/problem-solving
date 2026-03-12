const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  const [inp, out] = input[i].split(' ');
  console.log(inp === out ? 'OK' : 'ERROR');
}
