const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
// n + 1: 원소 수, m: 연산 수
const [n, m] = input[0].split(' ').map(Number);
const sets = Array.from({ length: n + 1 }, () => -1);
const res = [];
// 원소가 어떤 집합에 속해있는지 찾는 함수
const find = (num) => {
  if (sets[num] < 0) return num;
  return (sets[num] = find(sets[num]));
};
// 원소와 원소를 같은 집합으로 만드는 함수
const union = (num1, num2) => {
  let u = find(num1);
  let v = find(num2);
  if (u === v) return false;
  if (sets[u] === sets[v]) sets[u]--;
  if (sets[u] > sets[v]) [u, v] = [v, u];
  sets[v] = u;
  return true;
};

for (let i = 1; i < m + 1; i++) {
  const [cal, a, b] = input[i].split(' ').map(Number);
  if (cal) res.push(find(a) === find(b) ? 'YES' : 'NO');
  else union(a, b);
}
console.log(res.join('\n'));
