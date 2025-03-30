const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const buildings = input.slice(1).map(Number).reverse();
const stack = [[buildings[0], 0]];
let cnt = 0;

for (let i = 1; i < n; i++) {
  let tempCnt = 0;
  while (stack.length && buildings[i] > stack[stack.length - 1][0]) {
    const [height, popCnt] = stack.pop();
    tempCnt = tempCnt + popCnt + 1;
  }
  cnt += tempCnt;
  stack.push([buildings[i], tempCnt]);
}
console.log(cnt);
