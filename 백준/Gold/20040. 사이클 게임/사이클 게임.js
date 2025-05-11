const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const disjoint = Array.from({ length: n }, () => -1);
let cycle = 0;

const find = (node) => {
  if (disjoint[node] < 0) return node;
  return (disjoint[node] = find(disjoint[node]));
};

const union = (u, v) => {
  let rootU = find(u);
  let rootV = find(v);
  if (rootU === rootV) return false;
  if (disjoint[rootU] > disjoint[rootV]) [rootU, rootV] = [rootV, rootU];
  if (disjoint[rootU] === disjoint[rootV]) disjoint[rootU]--;
  disjoint[rootV] = rootU;
  return true;
};

for (let i = 1; i < m + 1; i++) {
  const [u, v] = input[i].split(' ').map(Number);

  if (!union(u, v)) {
    cycle = i;
    break;
  }
}
console.log(cycle);
