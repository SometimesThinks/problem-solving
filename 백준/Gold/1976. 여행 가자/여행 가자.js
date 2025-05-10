const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
// find 함수 정의
const find = (u, disjoint) => {
  if (disjoint[u] < 0) return u;
  return (disjoint[u] = find(disjoint[u], disjoint));
};
// union 함수 정의
const union = (u, v, disjoint) => {
  let rootU = find(u, disjoint);
  let rootV = find(v, disjoint);
  if (rootU === rootV) return false;
  if (disjoint[rootU] > disjoint[rootV]) [rootU, rootV] = [rootV, rootU];
  if (disjoint[rootU] === disjoint[rootV]) disjoint[rootU]--;
  disjoint[rootV] = rootU;
  return true;
};

const cities = Array.from({ length: n }, () => -1);

for (let i = 0; i < n; i++) {
  const info = input[i + 2].split(' ').map(Number);

  for (let j = 0; j < n; j++) {
    if (info[j]) union(i, j, cities);
  }
}
const plan = input[input.length - 1].split(' ').map((el) => Number(el) - 1);
let res = 'YES';

for (let i = 1; i < m; i++) {
  if (find(plan[i], cities) !== find(plan[i - 1], cities)) {
    res = 'NO';
    break;
  }
}
console.log(res);
