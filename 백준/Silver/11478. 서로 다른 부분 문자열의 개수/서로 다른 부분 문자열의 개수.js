const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const s = input[0];
const subs = new Set();

for (let i = 0; i < s.length; i++) {
  let sub = '';
  for (let j = i; j < s.length; j++) {
    sub += s[j];
    subs.add(sub);
  }
}
console.log(subs.size);
