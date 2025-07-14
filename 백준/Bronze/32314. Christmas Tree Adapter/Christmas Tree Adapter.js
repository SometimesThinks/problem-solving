const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const a = Number(input[0]);
const [w, v] = input[1].split(' ').map(Number);

console.log(w / v >= a ? 1 : 0);
