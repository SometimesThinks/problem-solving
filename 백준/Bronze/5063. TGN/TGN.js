const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  const [r, e, c] = input[i].split(' ').map(Number);
  const effect = e - c;

  if (effect == r) console.log('does not matter');
  else if (effect < r) console.log('do not advertise');
  else console.log('advertise');
}
