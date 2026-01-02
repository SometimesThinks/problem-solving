const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const check = new Map();
const notes = input.slice(1).map((val) => {
  check.set(val, true);
  return val;
});

for (let i = 0; i < n; i++) {
  const origin = notes[i];
  const reversed = [...origin].reverse().join('');

  if (check.get(reversed)) {
    console.log(origin.length, origin[Math.floor(origin.length / 2)]);
    break;
  }
}
