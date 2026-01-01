const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const rainbow = new Map([['ChongChong', true]]);
let cnt = 0;

for (let i = 1; i < n + 1; i++) {
  const [a, b] = input[i].split(' ');

  if (rainbow.get(a)) rainbow.set(b, true);
  else if (rainbow.get(b)) rainbow.set(a, true);
}
rainbow.forEach((val) => {
  if (val) cnt++;
});
console.log(cnt);
