const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const res = [];
const gcp = (a, b) => {
  return b > 0 ? gcp(b, a % b) : a;
};

for (let i = 1; i < t + 1; i++) {
  const tc = input[i].split(' ').map(Number);
  const n = tc[0];
  let sum = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      sum += gcp(tc[i], tc[j]);
    }
  }
  res.push(sum);
}
console.log(res.join('\n'));
