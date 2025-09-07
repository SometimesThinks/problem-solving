const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const scores = [];

for (let i = 1; i < n + 1; i++) {
  const [a, d, g] = input[i].split(' ').map(Number);
  let score = a * (d + g);

  if (a === d + g) score *= 2;
  scores.push(score);
}
console.log(scores.sort((a, b) => b - a)[0]);
