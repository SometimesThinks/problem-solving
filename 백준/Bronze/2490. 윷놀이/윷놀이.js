const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

input.forEach((arr) => {
  const res = arr
    .split(' ')
    .map(Number)
    .reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  if (res === 0) {
    console.log('D');
  } else if (res === 1) {
    console.log('C');
  } else if (res === 2) {
    console.log('B');
  } else if (res === 3) {
    console.log('A');
  } else {
    console.log('E');
  }
});
