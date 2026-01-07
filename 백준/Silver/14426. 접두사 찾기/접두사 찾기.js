const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const s = input.slice(1, n + 1);
const strings = input.slice(n + 1, n + m + 1);
const trie = new Map();
let cnt = m;
// 집합 s => trie 기록
for (const el of s) {
  let pre = trie;
  for (let i = 0; i < el.length; i++) {
    if (!pre.has(el[i])) {
      if (i === el.length - 1) pre.set(el[i], 'END');
      else pre.set(el[i], new Map());
    }
    pre = pre.get(el[i]);
  }
}
// 집합 s의 접두사 여부 확인
for (const string of strings) {
  let pre = trie;
  for (let i = 0; i < string.length; i++) {
    if (!pre.has(string[i])) {
      cnt -= 1;
      break;
    }
    pre = pre.get(string[i]);
  }
}
console.log(cnt);
