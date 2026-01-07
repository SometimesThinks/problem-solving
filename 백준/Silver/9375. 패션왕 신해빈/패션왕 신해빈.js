const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  const clothes = new Map();
  let res = 1;

  for (let j = 0; j < n; j++) {
    const [_, kind] = input[idx++].split(' ');
    clothes.set(kind, (clothes.get(kind) || 0) + 1);
  }

  for (const cnt of clothes.values()) {
    res *= cnt + 1;
  }
  console.log(res - 1);
}
