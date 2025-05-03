const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

const find = (num, arr) => {
  if (arr[num] < 0) return num;
  return (arr[num] = find(arr[num], arr));
};

const union = (a, b, arr) => {
  let r1 = find(a, arr);
  let r2 = find(b, arr);
  if (r1 === r2) return false;
  if (arr[r1] > arr[r2]) [r1, r2] = [r2, r1];
  if (arr[r1] === arr[r2]) arr[r1]--;
  arr[r2] = r1;
  return true;
};

for (let i = 1; i < t + 1; i++) {
  const n = Number(input[idx++]);
  const k = Number(input[idx++]);
  const friends = Array.from({ length: n }, () => -1);
  const res = [`Scenario ${i}:`];
  // 친구 관계 연결
  for (let i = 0; i < k; i++) {
    const [a, b] = input[idx++].split(' ').map(Number);
    union(a, b, friends);
  }
  // 친구 관계 확인 쌍의 수
  const m = input[idx++];

  for (let i = 0; i < m; i++) {
    const [u, v] = input[idx++].split(' ').map(Number);
    res.push(find(u, friends) === find(v, friends) ? 1 : 0);
  }
  console.log(res.join('\n'));
  if (i !== t) console.log();
}
