const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const times = input.slice(1).map((time) => {
  return time
    .split(' ')
    .slice(1)
    .map(Number)
    .reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
});
const accTimes = times
  .sort((a, b) => a - b)
  .reduce((acc, cur, curIdx) => {
    if (curIdx === 0) {
      acc.push(cur);
    } else {
      acc.push(cur + acc[curIdx - 1]);
    }
    return acc;
  }, []);

console.log(accTimes.reduce((acc, cur) => (acc += cur), 0));
