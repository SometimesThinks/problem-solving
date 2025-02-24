const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// k: 수강 가능 인원, l: 대기 가능 인원
const [k, l] = input[0].split(' ').map(Number);
const waits = new Set();

for (let i = 1; i < l + 1; i++) {
  const number = input[i];
  if (waits.size <= l && waits.has(number)) {
    waits.delete(number);
    waits.add(number);
  } else if (waits.size < l && !waits.has(number)) {
    waits.add(number);
  }
}
console.log(Array.from(waits).slice(0, k).join('\n'));
