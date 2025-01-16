const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const doc = input[0];
const voca = input[1];
let cnt = 0;
let i = 0;

while (i < doc.length) {
  for (let j = 0; j < voca.length; j++) {
    if (doc[i + j] !== voca[j]) {
      break;
    }
    if (j === voca.length - 1) {
      cnt += 1;
      i = i + j;
    }
  }
  i++;
}
console.log(cnt);
