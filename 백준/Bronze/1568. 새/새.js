const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let n = Number(input[0]);
let song = 1;
let cnt = 0;

while (n > 0) {
  if (n >= song) {
    n -= song;
    song++;
  } else {
    n--;
    song = 2;
  }
  cnt++;
}
console.log(cnt);
