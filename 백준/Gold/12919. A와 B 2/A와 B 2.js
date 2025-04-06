const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const s = input[0];
const t = input[1];
const dfs = (str, reverse) => {
  let cnt = 0;
  if (str.length === s.length) {
    let reversed = str;
    if (reverse) reversed = str.split('').reverse().join('');
    if (reversed === s) return 1;
    else return cnt;
  }
  if (!reverse) {
    if (str[str.length - 1] === 'A')
      cnt += dfs(str.slice(0, str.length - 1), reverse);
    if (str[0] === 'B') cnt += dfs(str.slice(1), !reverse);
  } else {
    if (str[0] === 'A') cnt += dfs(str.slice(1), reverse);
    if (str[str.length - 1] === 'B')
      cnt += dfs(str.slice(0, str.length - 1), !reverse);
  }
  return cnt;
};
console.log(dfs(t, false) ? 1 : 0);
