const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const counts = Array.from({ length: 10 }, () => 0);
const roomNum = input[0].split('').map(Number);
let maxNum = -1;

roomNum.forEach((n) => {
  counts[n] += 1;
});
counts[6] = (counts[6] + counts[9]) / 2;
counts[9] = counts[6];
maxNum = Math.max(...counts);
console.log(Math.ceil(maxNum));
