const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
const dfs = (arr, n, idx, path) => {
  if (path.length === 6) {
    console.log(...path);
    return true;
  }
  if (idx >= n) {
    return false;
  }
  dfs(arr, n, idx + 1, [...path, arr[idx]]);
  dfs(arr, n, idx + 1, path);
};

while (idx < input.length - 1) {
  const [k, ...s] = input[idx++].split(' ').map(Number);

  dfs(s, k, 0, []);
  if (idx !== input.length - 1) console.log();
}
