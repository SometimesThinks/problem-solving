const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const jinho = input[0];
const n = Number(input[1]);
let cnt = 0;

for (let i = 2; i < n + 2; i++) if (input[i] === jinho) cnt += 1;
console.log(cnt);
