const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const gcp = (a, b) => {
  return b > 0 ? gcp(b, a % b) : a;
};
const res = [];

for (let i = 1; i < t + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  res.push((a * b) / gcp(a, b));
}
console.log(res.join('\n'));
