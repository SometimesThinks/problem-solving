const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const scores = [];
let winner = (number = 0);

for (let i = 0; i < 5; i++) {
  const score = input[i]
    .split(' ')
    .map(Number)
    .reduce((acc, cur) => (acc += cur), 0);
  scores.push(score);
}
for (let i = 0; i < 5; i++) {
  if (scores[i] > winner) {
    winner = scores[i];
    number = i + 1;
  }
}
console.log(number, winner);
