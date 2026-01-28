const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
let idx = 1;

while (true) {
  const num = Number(input[idx++]);

  if (!num) break;
  if (num % n) {
    console.log(`${num} is NOT a multiple of ${n}.`);
  } else {
    console.log(`${num} is a multiple of ${n}.`);
  }
}
