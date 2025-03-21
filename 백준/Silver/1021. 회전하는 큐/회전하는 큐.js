const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n: 큐의 크기, m: 뽑아낼 원소 수
const [n, m] = input[0].split(' ').map(Number);
const pickUp = input[1].split(' ').map(Number);
const deque = Array.from({ length: n }, (val, idx) => idx + 1);
let pickIdx = 0;
let cnt = 0;

while (pickIdx < m) {
  if (deque[0] === pickUp[pickIdx]) {
    pickIdx++;
    deque.shift();
  } else {
    const findIdx = deque.indexOf(pickUp[pickIdx]);
    if (findIdx >= deque.length / 2) {
      while (deque[0] != pickUp[pickIdx]) {
        deque.unshift(deque.pop());
        cnt++;
      }
    } else {
      while (deque[0] != pickUp[pickIdx]) {
        deque.push(deque.shift());
        cnt++;
      }
    }
  }
}
console.log(cnt);
