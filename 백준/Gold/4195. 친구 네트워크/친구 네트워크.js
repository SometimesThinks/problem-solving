const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const t = Number(input[0]);
let idx = 1;

const find = (node, disjoint) => {
  if (typeof disjoint[node][0] === 'number') return node;
  return (disjoint[node][0] = find(disjoint[node][0], disjoint));
};

const union = (u, v, disjoint) => {
  let rootU = find(u, disjoint);
  let rootV = find(v, disjoint);
  if (rootU === rootV) return disjoint[rootU][1];
  if (disjoint[rootU][0] > disjoint[rootV][0]) [rootU, rootV] = [rootV, rootU];
  if (disjoint[rootU][0] === disjoint[rootV][0]) disjoint[rootU][0]--;
  // 집합 인원 수
  const setCnt = disjoint[rootU][1] + disjoint[rootV][1];
  disjoint[rootU][1] = setCnt;
  disjoint[rootV][1] = setCnt;
  disjoint[rootV][0] = rootU;
  return setCnt;
};

for (let i = 0; i < t; i++) {
  const f = Number(input[idx++]);
  const network = {};
  const res = [];

  for (let i = 0; i < f; i++) {
    const [u, v] = input[idx++].split(' ');
    if (network[u] === undefined) network[u] = [-1, 1];
    if (network[v] === undefined) network[v] = [-1, 1];
    res.push(union(u, v, network));
  }
  console.log(res.join('\n'));
}
