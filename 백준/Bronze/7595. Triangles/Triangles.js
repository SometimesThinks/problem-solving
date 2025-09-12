const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const makeTriangle = (n) => {
  const res = [];

  for (let i = 1; i < n + 1; i++) res.push('*'.repeat(i));
  return res;
};

for (let i = 0; i < input.length - 1; i++) {
  const n = Number(input[i]);

  console.log(makeTriangle(n).join('\n'));
}
