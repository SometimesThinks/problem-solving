const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const scores = input.map((el) => el.split(' ').map(Number));

console.log(
  6 * scores[0][0] +
    3 * scores[0][1] +
    2 * scores[0][2] +
    1 * scores[0][3] +
    2 * scores[0][4],
  6 * scores[1][0] +
    3 * scores[1][1] +
    2 * scores[1][2] +
    1 * scores[1][3] +
    2 * scores[1][4]
);
