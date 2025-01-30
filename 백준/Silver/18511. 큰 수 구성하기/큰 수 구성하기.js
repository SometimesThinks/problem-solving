const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const elements = input[1].split(' ').map(Number);
const nums = [];
let maxNum = 0;
const dfs = (num) => {
  if (num.length <= n.toString().length) {
    if (Number(num) > n) {
      return;
    } else {
      if (Number(num) > maxNum) {
        maxNum = Number(num);
      }
    }
  } else {
    return;
  }
  for (let i = 0; i < k; i++) {
    dfs(num + elements[i].toString());
  }
};

dfs('');
console.log(maxNum);
