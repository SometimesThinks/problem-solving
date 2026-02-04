const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  const string = input[i];
  let res = string[0];

  for (let j = 1; j < string.length; j++) {
    if (string[j] != string[j - 1]) res += string[j];
  }
  console.log(res);
}
