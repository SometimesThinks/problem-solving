const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
const answers = input[1].split(' ').map(Number);

console.log(
  answers.reduce((acc, cur) => {
    if (cur === t) return (acc += 1);
    else return acc;
  }, 0)
);
