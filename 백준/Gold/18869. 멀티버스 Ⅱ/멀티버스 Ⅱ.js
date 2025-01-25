const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const planets = input.slice(1).map((str) => str.split(' ').map(Number));
const comCnt = {};
let ans = 0;
// 행성 -> 좌표 변경 함수
const compress = (arr) => {
  const arrIdx = arr
    .map((val, idx) => [val, idx])
    .sort((arr1, arr2) => arr1[0] - arr2[0]);
  const compression = Array.from({ length: n }, () => 0);
  let cnt = 0;

  compression[arrIdx[0][1]] = 0;
  for (let i = 1; i < n; i++) {
    if (arrIdx[i - 1][0] != arrIdx[i][0]) {
      cnt += 1;
    }
    compression[arrIdx[i][1]] = cnt;
  }
  return compression.join('');
};
for (const planet of planets) {
  comCnt[compress(planet)] = (comCnt[compress(planet)] || 0) + 1;
}
for (const cnt of Object.values(comCnt)) {
  ans += Math.floor(((cnt - 1) * cnt) / 2);
}
console.log(ans);
