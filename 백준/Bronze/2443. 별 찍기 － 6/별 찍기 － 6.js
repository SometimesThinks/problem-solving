const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = n; i > 0; i--) {
  console.log(`${' '.repeat(n - i)}${'*'.repeat(2 * i - 1)}`);
}
