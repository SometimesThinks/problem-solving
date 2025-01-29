const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n: 배열 크기, m: 질의 개수
const [n, m] = input[0].split(' ').map(Number);
const seq = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const questions = input
  .slice(2)
  .map((question) => question.split(' ').map(Number));

for (let i = 0; i < m; i++) {
  const quNum = questions[i][0];
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (quNum === 1) {
      if (seq[j] >= questions[i][1]) {
        cnt += 1;
      }
    } else if (quNum === 2) {
      if (seq[j] > questions[i][1]) {
        cnt += 1;
      }
    } else {
      if (seq[j] >= questions[i][1] && seq[j] <= questions[i][2]) {
        cnt += 1;
      }
    }
  }
  console.log(cnt);
}
