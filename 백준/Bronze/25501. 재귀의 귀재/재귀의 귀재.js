const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const recursion = (string, l, r, cnt) => {
  if (l >= r) {
    return [1, cnt];
  } else if (string[l] != string[r]) {
    return [0, cnt];
  } else {
    return recursion(string, l + 1, r - 1, cnt + 1);
  }
};

for (let i = 1; i < n + 1; i++) {
  const s = input[i];

  console.log(...recursion(s, 0, s.length - 1, 1));
}
