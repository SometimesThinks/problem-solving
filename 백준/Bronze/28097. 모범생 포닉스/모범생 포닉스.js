const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const tn = input[1].split(' ').map(Number);
let time = 8 * (n - 1) + tn.reduce((acc, cur) => acc + cur, 0);

console.log(Math.floor(time / 24), time % 24);
