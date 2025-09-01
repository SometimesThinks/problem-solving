const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const seq = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

if (seq[0] + seq[1] === seq[2]) console.log(1);
else if (seq[0] * seq[1] === seq[2]) console.log(2);
else console.log(3);
