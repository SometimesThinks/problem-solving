const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const w = Number(input[0]);
const l = Number(input[1]);

console.log(w * l);
