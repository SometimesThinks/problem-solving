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
const findMore = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
const findOver = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
const findBelow = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
};

for (let i = 0; i < m; i++) {
  const quNum = questions[i][0];
  let cnt = 0;
  if (quNum === 1) {
    cnt = n - findMore(seq, questions[i][1]);
  } else if (quNum === 2) {
    cnt = n - findOver(seq, questions[i][1]);
  } else {
    cnt = findBelow(seq, questions[i][2]) - findMore(seq, questions[i][1]) + 1;
  }
  console.log(cnt);
}
