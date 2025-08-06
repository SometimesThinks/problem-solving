const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

console.log('Gnomes:');
for (let i = 1; i < n + 1; i++) {
  const seq = input[i].split(' ').map(Number);

  if (seq[0] - seq[1] < 0 && seq[1] - seq[2] < 0) console.log('Ordered');
  else if (seq[0] - seq[1] > 0 && seq[1] - seq[2] > 0) console.log('Ordered');
  else console.log('Unordered');
}
