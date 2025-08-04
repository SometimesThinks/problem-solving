const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const trees = input.slice(1).map(Number);
const intervals = [];
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
let max = 1;
let ans = 0;

for (let i = 1; i < n; i++) intervals.push(trees[i] - trees[i - 1]);
max = intervals[0];
for (let i = 1; i < n - 1; i++) max = gcd(max, intervals[i]);
for (let i = 0; i < n - 1; i++) ans += intervals[i] / max - 1;
console.log(ans);
