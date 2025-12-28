const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

let idx = 0;
const res = [];

while (true) {
  const [n, m] = input[idx++].split(' ').map(Number);
  let cnt = 0;

  if (n === 0 && m === 0) break;

  const sang = input.slice(idx, idx + n).map(Number);
  idx += n;
  const sun = input.slice(idx, idx + m).map(Number);
  idx += m;
  let l = (r = 0);

  while (l < n && r < m) {
    const cd1 = sang[l];
    const cd2 = sun[r];

    if (cd1 === cd2) {
      cnt++;
      r++;
    } else if (cd1 < cd2) l++;
    else {
      r++;
    }
  }
  res.push(cnt);
}
console.log(res.join('\n'));
