const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf-8')
  .trim()
  .split('\n')
  .map((str) => str.split(' '));

const n = Number(input[0][0]);
const seq = [];
// 입력값 처리
input.map((line) =>
  line.forEach((num) => {
    if (num.trim().length) seq.push(num);
  })
);
// 문제 풀이 시작점
const reverse = (num) => {
  const revered = num.split('').reverse();
  let idx = 0;
  for (let i = 0; i < revered.length; i++) {
    if (revered[i] !== '0') {
      idx = i;
      break;
    }
  }
  return Number(revered.slice(idx).join(''));
};
console.log(
  seq
    .slice(1)
    .map(reverse)
    .sort((a, b) => a - b)
    .join('\n')
);
