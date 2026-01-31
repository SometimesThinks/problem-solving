const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const res = [];

for (let i = 1; i < n + 1; i++) {
  const line = input[i].split(' ');
  let num = Number(line[0]);

  for (let i = 1; i < line.length; i++) {
    if (line[i] === '@') num *= 3;
    else if (line[i] === '%') num += 5;
    else num -= 7;
  }
  res.push(num.toFixed(2));
}
console.log(res.join('\n'));
