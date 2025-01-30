const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const wScores = input
  .slice(0, 10)
  .map(Number)
  .sort((a, b) => b - a);
const kScores = input
  .slice(10, 20)
  .map(Number)
  .sort((a, b) => b - a);
let wScore = 0;
let kScore = 0;

for (let i = 0; i < 3; i++) {
  wScore += wScores[i];
  kScore += kScores[i];
}
console.log(wScore, kScore);
