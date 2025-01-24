const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  console.log(`${'*'.repeat(i)}${' '.repeat(2 * (n - i))}${'*'.repeat(i)}`);
}
for (let i = n - 1; i > 0; i--) {
  console.log(`${'*'.repeat(i)}${' '.repeat(2 * (n - i))}${'*'.repeat(i)}`);
}
