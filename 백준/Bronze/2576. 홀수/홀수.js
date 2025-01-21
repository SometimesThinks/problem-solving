const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const odds = input
  .map(Number)
  .filter((e) => e % 2 === 1)
  .sort((a, b) => a - b);

if (odds.length > 0) {
  console.log(
    odds.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0)
  );
  console.log(odds[0]);
} else {
  console.log(-1);
}
