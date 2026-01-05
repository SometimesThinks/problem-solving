const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const name = input[0];
const chars = new Map();
const res = Array.from({ length: name.length }, () => '');

for (let i = 0; i < name.length; i++) {
  chars.set(name[i], (chars.get(name[i]) || 0) + 1);
}

const charsArray = [...chars].sort();
const isOddLen = name.length % 2 === 1 ? true : false;
const oddCnt = charsArray.filter((arr) => arr[1] % 2 === 1).length;
let idx = 0;

if ((isOddLen && oddCnt !== 1) || (!isOddLen && oddCnt)) {
} else {
  for (let i = 0; i < Math.floor(name.length / 2); i++) {
    if (charsArray[idx] && charsArray[idx][1] % 2 === 1) {
      res[Math.floor(name.length / 2)] = charsArray[idx][0];
      charsArray[idx][1]--;
    }
    if (charsArray[idx][1] === 0) idx++;
    if (charsArray[idx][1] >= 2) {
      res[i] = charsArray[idx][0];
      res[name.length - 1 - i] = charsArray[idx][0];
      charsArray[idx][1] -= 2;
    }
    if (charsArray[idx][1] === 0) idx++;
  }
  if (charsArray[idx] && charsArray[idx][1] % 2 === 1) {
    res[Math.floor(name.length / 2)] = charsArray[idx][0];
    charsArray[idx][1]--;
  }
}
console.log(res.join('').length ? res.join('') : `I'm Sorry Hansoo`);
