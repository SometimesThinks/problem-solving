const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const tree = {};

for (let i = 1; i < n + 1; i++) {
  const edges = input[i].split(' ');
  if (!tree[edges[0]]) tree[edges[0]] = [];
  for (let i = 1; i < 3; i++) {
    tree[edges[0]].push(edges[i]);
  }
}
// 문제 풀이 시작점
let pre = '';
let post = '';
let inOrder = '';
const dfs = (str) => {
  pre += str;
  if (tree[str][0] !== '.') dfs(tree[str][0]);
  inOrder += str;
  if (tree[str][1] !== '.') dfs(tree[str][1]);
  post += str;
};
dfs('A');
console.log(pre);
console.log(inOrder);
console.log(post);
