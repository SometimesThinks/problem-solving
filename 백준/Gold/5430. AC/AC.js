const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);

for (let i = 0; i < t; i++) {
  const p = input[i * 3 + 1];
  const n = Number(input[i * 3 + 2]);
  const arr = JSON.parse(input[i * 3 + 3]);
  let r = false;
  let front = 0;
  let back = n - 1;
  let error = false;

  for (const func of p) {
    if (func === 'R') r = !r;
    else {
      if (front > back) {
        error = true;
        break;
      }
      if (!r) front++;
      else back--;
    }
  }
  if (!error) {
    const newArr = arr.slice(front, back + 1);
    if (r) newArr.reverse();
    console.log(JSON.stringify(newArr));
  } else console.log('error');
}
